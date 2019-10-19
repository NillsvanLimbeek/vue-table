<template>
    <div class="filter-dropdown">
        <Dropdown title="Filter">
            <FilterItem :items="items" />
        </Dropdown>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { TableItem } from '@/data';

    const Dropdown = () => import('@/components/dropdown/Dropdown.vue');
    const FilterItem = () => import('./filter-item/FilterItem.vue');

    @Component({
        components: {
            Dropdown,
            FilterItem,
        },
    })
    export default class FilterDropdown extends Vue {
        @Prop({ required: true }) private items!: TableItem[];
    }
</script>

<style lang="scss" src="./FilterDropdown.scss">
</style>
