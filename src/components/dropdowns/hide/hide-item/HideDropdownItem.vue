<template>
    <div class="hide-dropdown-item">
        <Checkbox
            @click="toggleVisibility"
            :active="item.visible" />

        <div class="hide-dropdown-item__body">
            <span @click="toggleVisibility">
                {{ item.title | splitByUppercase | uppercase }}
            </span>

            <i class="fas fa-ellipsis-v"></i>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { TableItem } from '@/data';
    import { EventBus } from '@/event-bus';

    const Checkbox = () => import('@/components/checkbox/Checkbox.vue');

    @Component({
        components: {
            Checkbox,
        },
    })
    export default class HideDropdownItem extends Vue {
        @Prop({ required: true }) private item!: TableItem;

        private toggleVisibility() {
            const visible = this.item.visible ? false : true;

            EventBus.$emit('visible', { title: this.item.title, visible });
        }
    }
</script>

<style lang="scss" src="./HideDropdownItem.scss">
</style>
