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
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from '@/vue-script';

    const TableData = () => import('./TableData.vue');
    const TableHeader = () => import('./TableHeader.vue');
    const TableItem = () => import('./TableItem.vue');

    @Component({
        components: {
            TableData,
            TableHeader,
            TableItem,
        },
    })
    export default class Table extends Vue {
        private sortChoices: string[] = ['firstName', 'lastName', 'age'];
        private choice: string | null = null;

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
    }
</script>

<style lang="scss">
</style>
