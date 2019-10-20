<template>
    <div class="filter-dropdown">
        <Dropdown title="Filter">
            <FilterItem
                v-for="(filter, index) in filters"
                :key="index"
                :items="items"
                :filter="filter"
            />
        </Dropdown>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { store } from '@/store';
    import { TableItem, Filter } from '@/data';

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

        private get filters(): Filter[] {
            return store.filters;
        }
    }
</script>

<style lang="scss" src="./FilterDropdown.scss">
</style>
