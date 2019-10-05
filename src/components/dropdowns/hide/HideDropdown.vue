<template>
    <div class="hide-dropdown">
        <Dropdown title="hide">
            <HideDropdownItem
                v-for="(item, index) in items"
                :key="index"
                :item="item"
            />
        </Dropdown>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { TableItem } from '@/data';

    const Dropdown = () => import('@/components/dropdown/Dropdown.vue');
    const HideDropdownItem = () => import('./hide-item/HideDropdownItem.vue');

    @Component({
        components: {
            Dropdown,
            HideDropdownItem,
        },
    })
    export default class HideDropdown extends Vue {
        @Prop({ required: true }) private items!: TableItem[];
    }
</script>

<style lang="scss" src="./HideDropdown.scss">
</style>
