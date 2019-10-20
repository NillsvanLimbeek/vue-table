<template>
    <div class="item">
        <Dropdown :title="filter.item | splitByUppercase">
            <p
                class="item__item"
                v-for="(item, index) in items"
                :key="index"
                @click="updateFilter(item.title)"
            >
                {{ item.title | splitByUppercase | uppercase }}
            </p>
        </Dropdown>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { TableItem, Filter } from '@/data';
    import { mutations } from '@/store';

    const Dropdown = () => import('@/components/dropdown/Dropdown.vue');

    @Component({
        components: {
            Dropdown,
        },
    })
    export default class Item extends Vue {
        @Prop({ required: true }) private items!: TableItem[];
        @Prop() private filter!: Filter;

        private updateFilter(item: string) {
            const filter = { ...this.filter, item };
            mutations.updateFilter(filter);
        }
    }
</script>

<style lang="scss" src="./Item.scss">
</style>
