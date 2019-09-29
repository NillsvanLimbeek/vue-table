<template>
    <div class="table-list">
        <TableListItem
            v-for="contact in searchContacts"
            :key="contact.id"
            :contact="contact"
            :items="tableItems"
        />
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { TableItem, SearchFor } from '@/data';

    const TableListItem = () => import('@/components/table-item/TableListItem.vue');

    @Component({
        components: {
            TableListItem,
        },
    })
    export default class TableList extends Vue {
        @Prop({ required: true }) private contacts!: any[];
        @Prop({ required: true }) private tableItems!: TableItem[];
        @Prop() private search!: SearchFor;

        private get searchContacts() {
            if (this.search.string) {
                return this.contacts.filter((x) =>
                    x[this.search.property]
                        .toString()
                        .toLowerCase()
                        .startsWith(this.search.string),
                );
            }

            return this.contacts;
        }
    }
</script>

<style lang="scss" src="./TableList.scss">
</style>
