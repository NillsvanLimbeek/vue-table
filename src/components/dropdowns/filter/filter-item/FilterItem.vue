<template>
    <div class="filter-item">
        <PrefixDropdown :filter="filter" />

        <ItemDropdown
            :items="items"
            :filter="filter"
        />

        <OperatorDropdown :filter="filter" />

        <input type="text">

        <i class="fas fa-times"></i>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { TableItem, Filter } from '@/data';

    const PrefixDropdown = () => import('@/components/dropdowns/prefix/Prefix.vue');
    const ItemDropdown = () => import('@/components/dropdowns/item/Item.vue');
    const OperatorDropdown = () =>
        import('@/components/dropdowns/operator/Operator.vue');

    @Component({
        components: {
            PrefixDropdown,
            ItemDropdown,
            OperatorDropdown,
        },
    })
    export default class FilterItem extends Vue {
        @Prop() private items!: TableItem[];
        @Prop() private filter!: Filter;
    }
</script>

<style lang="scss" src="./FilterItem.scss">
</style>
