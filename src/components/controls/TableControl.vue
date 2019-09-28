<template>
    <div class="table-control">
        <div class="table-control__header">
            Controls
        </div>

        <div class="table-control__body">
            <TableControlItem
                v-for="(item, index) in items"
                :key="index"
                :item="item"
                @update-table="updateTable"
                @update-order="updateOrder"
            />

            <div class="table-control__search">
                <label for="search">Search:</label>
                <input
                    type="text"
                    name="search"
                    v-model="search"
                    @input="$emit('search', search)"
                >
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { TableItem } from '@/data';

    const TableControlItem = () =>
        import('@/components/control-item/TableControlItem.vue');

    @Component({
        components: {
            TableControlItem,
        },
    })
    export default class TableControl extends Vue {
        @Prop({ required: true }) private items!: TableItem[];

        private search: string = '';

        private updateTable() {
            //
        }

        private updateOrder() {
            //
        }
    }
</script>

<style lang="scss" src="./TableControl.scss">
</style>
