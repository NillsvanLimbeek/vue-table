<template>
    <div>
        <div
            class="item-checkbox"
            v-for="(item, index) in items"
            :key="item.name">

            <div class="item-checkbox__input">
                <label for="item">{{ item.title | splitByUppercase | uppercase }}</label>
                <input
                    type="checkbox"
                    v-model="items[index].visible"
                    @change="$emit('update-table', {title: item.title, visible: item.visible})"
                >
            </div>

            <div class="item-checkbox__input">
                <label for="position">Position</label>
                <input
                    type="number"
                    v-model="items[index].order"
                    name="position"
                    @blur="$emit('update-order', { title: item.title, order: item.order })"
                >
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    @Component({})
    export default class ItemCheckbox extends Vue {
        @Prop({ required: true }) private items!: any[];
    }
</script>

<style lang="scss" src="./ItemCheckbox.scss">
</style>
