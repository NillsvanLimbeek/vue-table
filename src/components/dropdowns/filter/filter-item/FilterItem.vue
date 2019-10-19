<template>
    <div class="filter-item">
        <PrefixDropdown />
        <ItemDropdown :items="items" />
        <OperatorDropdown />
        <input type="text">
        <i class="fas fa-times"></i>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { TableItem } from '@/data';

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
    }
</script>

<style lang="scss" src="./FilterItem.scss">
</style>
