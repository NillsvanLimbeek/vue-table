<template>
    <div class="table-control-item">
        <div class="table-control-item__input">
            <input
                type="checkbox"
                v-model="item.visible"
                @change="$emit('update-table', { title: item.title, visible: item.visible })"
            >
            <label for="item">{{ item.title | splitByUppercase | uppercase }}</label>

        </div>

        <div class="table-control-item__input">
            <label for="position">Position</label>
            <input
                type="number"
                v-model="item.order"
                name="position"
                @blur="$emit('update-order', { title: item.title, order: item.order })"
            >
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { TableItem } from '@/data';

    @Component({})
    export default class TableControlItem extends Vue {
        @Prop({ required: true }) private item!: TableItem;
    }
</script>

<style lang="scss" src="./TableControlItem.scss">
</style>
