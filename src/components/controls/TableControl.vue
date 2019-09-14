<template>
    <div class="table-control">
        <div class="table-control__header">
            Controls
        </div>

        <div class="table-control__body">
            <ControlItem
                v-for="(item, index) in items"
                :key="index"
                :item="item"
                @update-table="updateTable"
                @update-order="updateOrder"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    const ControlItem = () => import('@/components/control-item/ControlItem.vue');

    @Component({
        components: {
            ControlItem,
        },
    })
    export default class TableControl extends Vue {
        @Prop({ required: true }) private items!: any[];

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
