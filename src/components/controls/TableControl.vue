<template>
    <div class="table-control">
        <HideDropdown :items="items" />
        <FilterDropdown :items="items" />
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { TableItem, SearchFor } from '@/data';

    const HideDropdown = () =>
        import('@/components/dropdowns/hide/HideDropdown.vue');
    const FilterDropdown = () =>
        import('@/components/dropdowns/filter/FilterDropdown.vue');

    @Component({
        components: {
            HideDropdown,
            FilterDropdown,
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
