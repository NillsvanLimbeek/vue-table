<template>
    <div>
        <div class="item-checkbox" v-for="item in tableItems">
            <label for="title">{{ item | splitByUppercase | uppercase }}</label>
            <input
                type="checkbox"
                :title="item"
                @change="$emit('update-table', item)">
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    @Component({})
    export default class ItemCheckbox extends Vue {
        private tableItems: any[] = [
            'firstName',
            'lastName',
            'age',
            'company',
            'email',
            'phone',
            'address',
        ];
    }
</script>

<style lang="scss" src="./ItemCheckbox.scss">
</style>
