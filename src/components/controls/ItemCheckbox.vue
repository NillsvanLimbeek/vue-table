<template>
    <div>
        <div class="item-checkbox" v-for="title in titles">
            <label for="title">{{ title | splitByUppercase | uppercase }}</label>
            <input
                type="checkbox"
                :title="title"
                @change="$emit('update-table', title)">
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    @Component({})
    export default class ItemCheckbox extends Vue {
        @Prop({ required: true }) private titles!: string[];
    }
</script>

<style lang="scss" src="./ItemCheckbox.scss">
</style>
