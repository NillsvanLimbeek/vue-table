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
                    @change="$emit('update-table', items[index].visible)"
                >
            </div>

            <!-- <div class="item-checkbox__input">
                <label for="position">Position</label>
                <input
                    type="number"
                    name="position"
                >
            </div> -->
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    @Component({})
    export default class ItemCheckbox extends Vue {
        @Prop({ required: true }) private items!: any[];

        private updateOrder(obj: any) {
            this.$emit('update-order', obj);
        }
    }
</script>

<style lang="scss" src="./ItemCheckbox.scss">
</style>
