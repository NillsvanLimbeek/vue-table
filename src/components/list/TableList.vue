<template>
    <div class="table-list">
        <TableItem
            v-for="contact in contacts"
            :key="contact.id"
            :contact="contact"
            :items="tableItems"
        />
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    const TableItem = () => import('../item/TableItem.vue');

    @Component({
        components: {
            TableItem,
        },
    })
    export default class TableList extends Vue {
        @Prop({ required: true }) private contacts!: any[];
        @Prop({ required: true }) private tableItems!: any[];
    }
</script>

<style lang="scss" src="./TableList.scss">
</style>
