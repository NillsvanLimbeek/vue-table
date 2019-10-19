<template>
    <div class="item">
        <Dropdown title="Item">
            <p
                class="item__item"
                v-for="(item, index) in items"
                :key="index"
            >
                {{ item.title | splitByUppercase | uppercase }}
            </p>
        </Dropdown>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { TableItem } from '@/data';

    const Dropdown = () => import('@/components/dropdown/Dropdown.vue');

    @Component({
        components: {
            Dropdown,
        },
    })
    export default class Item extends Vue {
        @Prop({ required: true }) private items!: TableItem[];
    }
</script>

<style lang="scss" src="./Item.scss">
</style>
