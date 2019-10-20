<template>
    <div class="operator">
        <Dropdown :title="filter.operator">
            <p
                class="operator__item"
                v-for="(operator, index) in operators"
                :key="index"
                @click="updateFilter(operator)"
            >

                {{ operator }}
            </p>
        </Dropdown>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { Filter, Operator } from '@/data';
    import { mutations } from '@/store';

    const Dropdown = () => import('@/components/dropdown/Dropdown.vue');

    @Component({
        components: {
            Dropdown,
        },
    })
    export default class OperatorDropdown extends Vue {
        @Prop() private filter!: Filter;

        private operators: string[] = [
            'contains...',
            'does not contain...',
            'is',
            'is not...',
            'is empty',
            'is not empty',
        ];

        private updateFilter(operator: Operator) {
            const filter = { ...this.filter, operator };
            mutations.updateFilter(filter);
        }
    }
</script>

<style lang="scss" src="./Operator.scss">
</style>
