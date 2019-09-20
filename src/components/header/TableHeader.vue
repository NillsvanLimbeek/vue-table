<template>
    <div class="table-header">
        <HeaderItem
            v-for="(item, index) in filteredItems"
            :key="index"
            :item="item"
            :sort-by="sortBy"
            @sort="$emit('sort', $event)"
        />
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { sortSingle } from '@/utils';

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
            return sortSingle(
                this.items.filter((x) => x.visible === true),
                'order',
            );
        }
    }
</script>

<style lang="scss" src="./TableHeader.scss">
</style>
