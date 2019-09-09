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
            :titles="checkboxTitles"
            @update-table="updateTable" />
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
        private checkboxTitles: string[] = [];
        private tableOrder: any[] = [
            { title: 'firstName', width: 150 },
            { title: 'lastName', width: 150 },
            { title: 'age', width: 150 },
            { title: 'company', width: 150 },
            { title: 'email', width: 150 },
            { title: 'phone', width: 150 },
            { title: 'address', width: 150 },
        ];

        private changeSort(sortOrder: string) {
            this.choice === sortOrder
                ? (this.choice = `-${sortOrder}`)
                : (this.choice = sortOrder);
        }

        private updateTable(name: string) {
            const tableProperty = this.tableOrder.find((x) => x.title === name);

            if (tableProperty) {
                this.tableOrder = this.tableOrder.filter((x) => x.title !== name);
            } else {
                this.tableOrder.push({ title: name, width: 150 });
            }
        }

        private created() {
            this.checkboxTitles = this.tableOrder.map((x) => x.title);
        }
    }
</script>

<style lang="scss">
</style>
