<template>
    <div class="item">
        <Dropdown :title="filter.item | splitByUppercase">
            <p
                class="item__item"
                v-for="(item, index) in items"
                :key="index"
                @click="$emit('item', item.title)"
            >
                {{ item.title | splitByUppercase | uppercase }}
            </p>
        </Dropdown>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { TableItem, Filter } from '@/data';

    const Dropdown = () => import('@/components/dropdown/Dropdown.vue');

    @Component({
        components: {
            Dropdown,
        },
    })
    export default class Item extends Vue {
        @Prop({ required: true }) private items!: TableItem[];
        @Prop() private filter!: Filter;
    }
</script>

<style lang="scss" src="./Item.scss">
</style>
