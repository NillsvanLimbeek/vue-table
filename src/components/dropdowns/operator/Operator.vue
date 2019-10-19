<template>
    <div class="operator">
        <Dropdown title="Operator">
            <p
                class="operator__item"
                v-for="(operator, index) in operators"
                :key="index"
            >

                {{ operator }}
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
    export default class Operator extends Vue {
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
