<template>
    <div class="item-checkbox">
        <label for="title">{{ title.title | splitByUppercase | uppercase }}</label>
        <input
            type="checkbox"
            :title="title.title"
            v-model="title.visible"
            @change="$emit('update-table', title.title)">
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    @Component({})
    export default class ItemCheckbox extends Vue {
        @Prop({ required: true }) private title!: string;
    }
</script>

<style lang="scss" src="./ItemCheckbox.scss">
</style>
