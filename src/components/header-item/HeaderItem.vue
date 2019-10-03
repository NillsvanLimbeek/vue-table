<template>
    <div
        class="header-item"
        :style="{ width: item.width + 'px' }"
        @click="sortItems"
    >

        {{ item.title | splitByUppercase | uppercase }}

        <i
            v-if="showArrow"
            class="header-item__icon fas fa-chevron-up"
            :class="{ 'header-item__icon--rotated': arrowDirection === -1 }"
        />

        <div
            class="header-item__resize-handle"
            @mousedown="resizeItem"
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

        private get showArrow() {
            if (this.sortBy) {
                const titles: string[] = this.sortBy.map((x) => x.title);
                return (
                    titles.includes(this.item.title) ||
                    titles.includes(`-${this.item.title}`)
                );
            }
        }

        private get arrowDirection(): number | undefined {
            if (this.sortBy) {
                const sort = this.sortBy.find((x) => x.title === this.item.title);

                if (sort) {
                    return sort.direction;
                }
            }
        }

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

        // TODO
        private resizeItem() {
            const element = document.querySelector('.header-item') as HTMLElement;
            const resizer = document.querySelector('.header-item__resize-handle');

            if (element && resizer) {
                resizer.addEventListener('mousedown', (e) => {
                    e.preventDefault();
                    window.addEventListener('mousemove', resize);
                    window.addEventListener('mouseup', stopResize);
                });
            }

            function resize(e) {
                element.style.width =
                    e.pageX - element.getBoundingClientRect().left + 'px';
            }

            function stopResize() {
                window.removeEventListener('mousemove', resize);
            }
        }
    }
</script>

<style lang="scss" src="./HeaderItem.scss">
</style>
