<template>
    <div
        v-click-outside="closeDropdown"
        class="dropdown"
    >
        <div
            class="dropdown__button"
            @click="showDropdown = true"
        >

            {{ title | uppercase }}
        </div>

        <div
            v-if="showDropdown"
            class="dropdown__body"
        >

            <slot />
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    @Component({})
    export default class Dropdown extends Vue {
        @Prop({ required: true }) private title!: string;

        private showDropdown: boolean = false;

        private closeDropdown() {
            this.showDropdown = false;
        }
    }
</script>

<style lang="scss" src="./Dropdown.scss">
</style>
