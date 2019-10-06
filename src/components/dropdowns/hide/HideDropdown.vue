<template>
    <div class="hide-dropdown">
        <Dropdown :title="dropdownTitle">
            <HideDropdownItem
                v-for="(item, index) in items"
                :key="index"
                :item="item"
            />

            <span @click="toggleAll(true)">Show All</span>
            <span @click="toggleAll(false)">Hide All</span>
        </Dropdown>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { TableItem } from '@/data';
    import { EventBus } from '@/event-bus';

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

        private get dropdownTitle() {
            const num = this.items.filter((x) => x.visible === false).length;

            if (num === 1) {
                return `${num} field hidden`;
            } else if (num > 1) {
                return `${num} fields hidden`;
            } else {
                return 'Hide';
            }
        }

        private toggleAll(toggle: boolean) {
            EventBus.$emit('visible', toggle);
        }
    }
</script>

<style lang="scss" src="./HideDropdown.scss">
</style>
