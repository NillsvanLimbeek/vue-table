<template>
    <div class="table-list-item">
        <div
            v-for="(item, index) in filteredItems"
            :key="index"
            :style="{ width: item.width + 'px' }"
            class="table-list-item__item"
        >

            {{ contact[item.title] }}
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { TableItem } from '@/data';

    import { sortBy } from '@/utils/sort-by';

    @Component({})
    export default class TableListItem extends Vue {
        @Prop({ required: true }) private contact!: any;
        @Prop({ required: true }) private items!: TableItem[];

        private get filteredItems(): TableItem[] {
            return sortBy(this.items.filter((x) => x.visible === true), 'order');
        }
    }
</script>

<style lang="scss" src="./TableListItem.scss">
</style>
