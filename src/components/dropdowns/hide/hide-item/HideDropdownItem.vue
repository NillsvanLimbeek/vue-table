<template>
    <div class="hide-dropdown-item">
        <Checkbox :active="item.active" />

        <div class="hide-dropdown-item__body">
            <span>
                {{ item.title | splitByUppercase | uppercase }}
            </span>

            <i class="fas fa-ellipsis-v"></i>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { TableItem } from '@/data';

    const Checkbox = () => import('@/components/checkbox/Checkbox.vue');

    @Component({
        components: {
            Checkbox,
        },
    })
    export default class HideDropdownItem extends Vue {
        @Prop({ required: true }) private item!: TableItem;
    }
</script>

<style lang="scss" src="./HideDropdownItem.scss">
</style>
