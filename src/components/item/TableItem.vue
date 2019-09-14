<template>
    <div class="table-item">
        <div
            v-for="(item, index) in filteredItems"
            :key="index"
            :style="{ width: item.width + 'px' }"
            class="table-item__item"
        >

            {{ contact[item.title] }}
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { sortBy } from '@/utils/sort-by';

    @Component({})
    export default class TableItem extends Vue {
        @Prop({ required: true }) private contact!: any;
        @Prop({ required: true }) private items!: any[];

        private get filteredItems() {
            return sortBy(this.items.filter((x) => x.visible === true), 'order');
        }
    }
</script>

<style lang="scss" src="./TableItem.scss">
</style>
