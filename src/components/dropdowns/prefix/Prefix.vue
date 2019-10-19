<template>
    <div class="prefix">
        <Dropdown title="Prefix">
            <p
                class="prefix__item"
                v-for="(prefix, index) in prefixes"
                :key="index"
            >
                {{ prefix | uppercase }}
            </p>
        </Dropdown>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from '@/vue-script';

    const Dropdown = () => import('@/components/dropdown/Dropdown.vue');

    @Component({
        components: {
            Dropdown,
        },
    })
    export default class Prefix extends Vue {
        private prefixes: string[] = ['and', 'or'];
    }
</script>

<style lang="scss" src="./Prefix.scss">
</style>
