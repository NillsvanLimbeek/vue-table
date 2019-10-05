<template>
    <div class="hide-dropdown">
        <Dropdown title="hide">
            <HideDropdownItem title="test" />
        </Dropdown>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from '@/vue-script';

    const Dropdown = () => import('@/components/dropdown/Dropdown.vue');
    const HideDropdownItem = () => import('./hide-item/HideDropdownItem.vue');

    @Component({
        components: {
            Dropdown,
            HideDropdownItem,
        },
    })
    export default class HideDropdown extends Vue {}
</script>

<style lang="scss" src="./HideDropdown.scss">
</style>
