<template>
    <div class="prefix">
        <Dropdown :title="filter.prefix">
            <p
                class="prefix__item"
                v-for="(prefix, index) in prefixes"
                :key="index"
                @click="$emit('prefix', prefix)"
            >
                {{ prefix | uppercase }}
            </p>
        </Dropdown>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { Prefix, Filter } from '@/data';

    const Dropdown = () => import('@/components/dropdown/Dropdown.vue');

    @Component({
        components: {
            Dropdown,
        },
    })
    export default class PrefixDropdown extends Vue {
        @Prop() private filter!: Filter;

        private prefixes: string[] = ['and', 'or'];
    }
</script>

<style lang="scss" src="./Prefix.scss">
</style>
