<template>
    <div class="table">
        <TableControl
            :items="tableItems"
            @search="search = $event"
        />

        <TableData
            url="/contacts.json"
            :sort="sort"
        >
            <template v-slot="{ data: contacts }">
                <div class="table__body">
                    <TableHeader
                        :items="tableItems"
                        :sort-by="sort"
                        @sort="sort = $event"
                    />

                    <TableList
                        :contacts="contacts"
                        :table-items="tableItems"
                        :search="search"
                    />
                </div>
            </template>
        </TableData>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from '@/vue-script';

    import { TableItem, SortBy } from '@/data';
    import { EventBus } from '@/event-bus';

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
        private sort: SortBy | SortBy[] | null = null;
        private search: string = '';

        private tableItems: TableItem[] = [
            { title: 'firstName', width: 150, visible: true, order: 1 },
            { title: 'lastName', width: 150, visible: true, order: 2 },
            { title: 'age', width: 150, visible: true, order: 3 },
            { title: 'company', width: 150, visible: true, order: 4 },
            { title: 'email', width: 150, visible: true, order: 5 },
            { title: 'phone', width: 150, visible: true, order: 6 },
            { title: 'address', width: 150, visible: true, order: 7 },
        ];

        private created() {
            EventBus.$on('visible', (payload) => {
                if (typeof payload === 'boolean') {
                    this.tableItems.forEach((item) => {
                        item.visible = payload;
                    });
                } else {
                    const item = this.tableItems.find(
                        (x) => x.title === payload.title,
                    );

                    if (item) {
                        item.visible = payload.visible;
                    }
                }
            });
        }
    }
</script>

<style lang="scss" src="./Table.scss">
</style>
