<template>
    <div class="table">
        <TableControl :items="tableItems" />

        <TableData
            url="/contacts.json"
            :sort="choice"
        >
            <template v-slot="{ data: contacts }">
                <div class="table__body">
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
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from '@/vue-script';

    import { TableItem } from '@/data';

    const TableData = () => import('@/components/TableData.vue');
    const TableHeader = () => import('@/components/header/TableHeader.vue');
    const TableControl = () => import('@/components/controls/TableControl.vue');
    const TableList = () => import('@/components/list/TableList.vue');

    @Component({
        components: {
            TableData,
            TableHeader,
            TableList,
            TableControl,
        },
    })
    export default class Table extends Vue {
        private choice: string | null = null;
        private tableItems: TableItem[] = [
            { title: 'firstName', width: 150, visible: true, order: 1 },
            { title: 'lastName', width: 150, visible: true, order: 2 },
            { title: 'age', width: 150, visible: true, order: 3 },
            { title: 'company', width: 150, visible: true, order: 4 },
            { title: 'email', width: 150, visible: true, order: 5 },
            { title: 'phone', width: 150, visible: true, order: 6 },
            { title: 'address', width: 150, visible: true, order: 7 },
        ];

        private changeSort(sortOrder: string): void {
            this.choice === sortOrder
                ? (this.choice = `-${sortOrder}`)
                : (this.choice = sortOrder);
        }

        private updateTable(name: string, visible: boolean): void {
            const tableProperty = this.tableItems.find((x) => x.title === name);

            if (tableProperty) {
                tableProperty.visible = visible;
            }
        }
    }
</script>

<style lang="scss" src="./Table.scss">
</style>
