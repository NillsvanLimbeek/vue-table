<template>
    <div class="table-list">
        <TableListItem
            v-for="contact in contacts"
            :key="contact.id"
            :contact="contact"
            :items="tableItems"
        />
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { TableItem } from '@/data';

    const TableListItem = () => import('@/components/table-item/TableListItem.vue');

    @Component({
        components: {
            TableListItem,
        },
    })
    export default class TableList extends Vue {
        @Prop({ required: true }) private contacts!: any[];
        @Prop({ required: true }) private tableItems!: TableItem[];
    }
</script>

<style lang="scss" src="./TableList.scss">
</style>
