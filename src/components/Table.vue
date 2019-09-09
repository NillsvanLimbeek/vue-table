<template>
    <div>
        <TableData
            url="/contacts.json"
            :sort="choice"
        >
            <template v-slot="{ data: contacts }">
                <div>
                    <TableHeader
                        :order="tableOrder"
                        :sort-by="choice"
                        @change-sort="changeSort"
                    />

                    <TableItem
                        v-for="contact in contacts"
                        :key="contact.id"
                        :contact="contact"
                        :order="tableOrder"
                    />
                </div>
            </template>
        </TableData>

        <h2>Controls</h2>
        <ItemCheckbox
            v-for="(item, index) in tableOrder"
            :key="index"
            :title="item"
            @update-table="updateTable"
        />
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from '@/vue-script';

    const TableData = () => import('./TableData.vue');
    const TableHeader = () => import('./TableHeader.vue');
    const TableItem = () => import('./TableItem.vue');
    const ItemCheckbox = () => import('./controls/ItemCheckbox.vue');

    @Component({
        components: {
            TableData,
            TableHeader,
            TableItem,
            ItemCheckbox,
        },
    })
    export default class Table extends Vue {
        private choice: string | null = null;
        private tableOrder: any[] = [
            { title: 'firstName', width: 150, visible: true },
            { title: 'lastName', width: 150, visible: true },
            { title: 'age', width: 150, visible: true },
            { title: 'company', width: 150, visible: true },
            { title: 'email', width: 150, visible: true },
            { title: 'phone', width: 150, visible: true },
            { title: 'address', width: 150, visible: true },
        ];

        private changeSort(sortOrder: string) {
            this.choice === sortOrder
                ? (this.choice = `-${sortOrder}`)
                : (this.choice = sortOrder);
        }

        private updateTable(name: string) {
            const tableProperty = this.tableOrder.find((x) => x.title === name);

            tableProperty.visible
                ? (tableProperty.visible = true)
                : (tableProperty.visible = false);
        }
    }
</script>

<style lang="scss">
</style>
