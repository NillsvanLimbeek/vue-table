<template>
    <div class="hide-dropdown-item">
        <Checkbox />

        {{ title | uppercase }}
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    const Checkbox = () => import('@/components/checkbox/Checkbox.vue');

    @Component({
        components: {
            Checkbox,
        },
    })
    export default class HideDropdownItem extends Vue {
        @Prop({ required: true }) private title!: string;
    }
</script>

<style lang="scss" src="./HideDropdownItem.scss">
</style>
