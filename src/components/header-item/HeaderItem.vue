<template>
    <div
        class="header-item"
        :style="{ width: item.width + 'px' }"
        @click="sortItems">

        {{ item.title | splitByUppercase | uppercase }}

        <i
            v-if="sortBy === item.title || sortBy === `-${item.title}`"
            class="header-item__icon fas fa-chevron-up"
            :class="{ 'header-item__icon--rotated': item.title === sortBy }"
        />
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { TableItem, SortBy } from '@/data';

    @Component({})
    export default class HeaderItem extends Vue {
        @Prop({ required: true }) private item!: TableItem;
        @Prop({ required: true }) private sortBy!: SortBy[] | null;

        private sortItems(e: MouseEvent): void {
            let sort: SortBy[] = [];

            if (this.sortBy) {
                if (e.shiftKey) {
                    sort = this.multipleSort(this.sortBy);
                } else {
                    sort = [this.singleSort(this.sortBy[0])];
                }
            } else {
                sort = [{ title: this.item.title, direction: 1 }];
            }

            this.$emit('sort', sort);
        }

        private singleSort(sortArr: SortBy): SortBy {
            return sortArr.direction === 1
                ? { title: this.item.title, direction: -1 }
                : { title: this.item.title, direction: 1 };
        }

        private multipleSort(sortArr: SortBy[]): SortBy[] {
            const sort: SortBy[] = [];

            const titles: string[] = sortArr.map((x) => x.title);

            if (!titles.includes(this.item.title)) {
                sort.push({ title: this.item.title, direction: 1 });
            } else {
                const item = sortArr.find((x) => x.title === this.item.title);

                if (item) {
                    item.direction === 1
                        ? (item.direction = -1)
                        : (item.direction = 1);
                }
            }

            return [...sortArr, ...sort];
        }
    }
</script>

<style lang="scss" src="./HeaderItem.scss">
</style>
