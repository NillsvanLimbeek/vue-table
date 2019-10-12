<template>
    <div class="hide-dropdown">
        <Dropdown :title="dropdownTitle">
            <Draggable
                v-model="dragItems"
                v-bind="dragOptions"
                @start="drag = true"
                @end="onDragEnd"
            >
                <transition-group :name="!drag ? 'flip-list' : null">
                    <HideDropdownItem
                        v-for="item in items"
                        :key="item.order"
                        :item="item"
                    />
                </transition-group>
            </Draggable>

            <span @click="toggleAll(true)">Show All</span>
            <span @click="toggleAll(false)">Hide All</span>
        </Dropdown>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { TableItem } from '@/data';
    import { EventBus } from '@/event-bus';

    import Draggable from 'vuedraggable';

    const Dropdown = () => import('@/components/dropdown/Dropdown.vue');
    const HideDropdownItem = () => import('./hide-item/HideDropdownItem.vue');

    @Component({
        components: {
            Dropdown,
            HideDropdownItem,
            Draggable,
        },
    })
    export default class HideDropdown extends Vue {
        @Prop({ required: true }) private items!: TableItem[];

        private drag: boolean = false;

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

        private get dragOptions() {
            return {
                animation: 200,
                disabled: false,
                ghostClass: 'ghost',
            };
        }

        private get dragItems() {
            return this.items;
        }

        private set dragItems(value: any) {
            console.log(value);
        }

        private onDragEnd(e: any) {
            // console.log(e);
        }

        private toggleAll(toggle: boolean) {
            EventBus.$emit('visible', toggle);
        }
    }
</script>

<style lang="scss" src="./HideDropdown.scss">
</style>
