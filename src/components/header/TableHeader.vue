<template>
    <div class="table-header">
        <HeaderItem
            v-for="(item, index) in filteredItems"
            :key="index"
            :item="item"
            :sort-by="sortBy"
            @sort="sortItems"
        />
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { sortBy } from '@/utils/sort-by';

    import { TableItem } from '@/data';

    const HeaderItem = () => import('@/components/header-item/HeaderItem.vue');

    @Component({
        components: {
            HeaderItem,
        },
    })
    export default class TableHeader extends Vue {
        @Prop({ required: true }) private items!: TableItem[];
        @Prop({ required: true }) private sortBy!: string;

        private get filteredItems(): TableItem[] {
            return sortBy(this.items.filter((x) => x.visible === true), 'order');
        }

        private sortItems(title: string): void {
            this.$emit('change-sort', title);
        }
    }
</script>

<style lang="scss" src="./TableHeader.scss">
</style>
