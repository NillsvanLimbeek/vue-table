<template>
    <div class="operator">
        <Dropdown :title="filter.operator">
            <p
                class="operator__item"
                v-for="(operator, index) in operators"
                :key="index"
                @click="$emit('operator', operator)"
            >

                {{ operator }}
            </p>
        </Dropdown>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    const Dropdown = () => import('@/components/dropdown/Dropdown.vue');

    @Component({
        components: {
            Dropdown,
        },
    })
    export default class Operator extends Vue {
        @Prop() private filter: Filter;

        private operators: string[] = [
            'contains...',
            'does not contain...',
            'is',
            'is not...',
            'is empty',
            'is not empty',
        ];
    }
</script>

<style lang="scss" src="./Operator.scss">
</style>
