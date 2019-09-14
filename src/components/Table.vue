<template>
    <div>
        <TableData
            url="/contacts.json"
            :sort="choice"
        >
            <template v-slot="{ data: contacts }">
                <div>
                    <TableHeader
                        :items="tableItems"
                        :sort-by="choice"
                        @change-sort="changeSort"
                    />

                    <TableList
                        :contacts="contacts"
                        :table-items="tableItems"
                    />
                </div>
            </template>
        </TableData>

        <h2>Controls</h2>
        <ItemCheckbox
            :items="tableItems"
            @update-table="updateTable"
        />
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from '@/vue-script';

    const TableData = () => import('./TableData.vue');
    const TableHeader = () => import('./header/TableHeader.vue');
    const ItemCheckbox = () => import('./controls/ItemCheckbox.vue');
    const TableList = () => import('./list/TableList.vue');

    @Component({
        components: {
            TableData,
            TableHeader,
            TableList,
            ItemCheckbox,
        },
    })
    export default class Table extends Vue {
        private choice: string | null = null;
        private tableItems: any[] = [
            { title: 'firstName', width: 150, visible: true, order: 1 },
            { title: 'lastName', width: 150, visible: true, order: 2 },
            { title: 'age', width: 150, visible: true, order: 3 },
            { title: 'company', width: 150, visible: true, order: 4 },
            { title: 'email', width: 150, visible: true, order: 5 },
            { title: 'phone', width: 150, visible: true, order: 6 },
            { title: 'address', width: 150, visible: true, order: 7 },
        ];

        private changeSort(sortOrder: string) {
            this.choice === sortOrder
                ? (this.choice = `-${sortOrder}`)
                : (this.choice = sortOrder);
        }

        private updateTable(name: string, visible: boolean) {
            const tableProperty = this.tableItems.find((x) => x.title === name);

            if (tableProperty) {
                tableProperty.visible = visible;
            }
        }
    }
</script>

<style lang="scss">
</style>
