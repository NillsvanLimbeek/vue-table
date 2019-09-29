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
                <div class="table-control__input">
                    <label for="search">Search: </label>
                    <input
                        type="text"
                        name="search"
                        v-model="search.string"
                        @input="$emit('search', search)"
                        autocomplete="off"
                    >
                </div>

                <div class="table-control__select">
                    <label for="search">Property: </label>

                    <select
                        v-model="search.property"
                        @change="search.property = $event.target.value"
                        name="property"
                    >

                        <option
                            v-for="item in searchSelectItems"
                            :value="item.property"
                        >
                            {{ item.title }}
                        </option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { TableItem, SearchFor } from '@/data';

    const TableControlItem = () =>
        import('@/components/control-item/TableControlItem.vue');

    @Component({
        components: {
            TableControlItem,
        },
    })
    export default class TableControl extends Vue {
        @Prop({ required: true }) private items!: TableItem[];

        private search: SearchFor = { property: 'firstName' };
        private searchSelectItems: any[] = [
            { title: 'First name', property: 'firstName' },
            { title: 'Last name', property: 'lastName' },
            { title: 'Age', property: 'age' },
            { title: 'Company', property: 'company' },
            { title: 'Email', property: 'email' },
            { title: 'Phone', property: 'phone' },
            { title: 'Address', property: 'address' },
        ];

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
