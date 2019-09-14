<template>
    <div class="table-header">
        <div
            class="table-header__item"
            v-for="(item, index) in filteredItems"
            :key="index"
            :style="{ width: item.width + 'px' }"
            @click="$emit('change-sort', item.title)"
        >

            {{ item.title | splitByUppercase | uppercase }}

            <i
                v-if="sortBy === item.title || sortBy === `-${item.title}`"
                class="table-header__item-icon fas fa-chevron-up"
                :class="{ 'table-header__item-icon--rotated': item.title === sortBy }"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { sortBy } from '@/utils/sort-by';

    @Component({})
    export default class TableHeader extends Vue {
        @Prop({ required: true }) private items!: any[];
        @Prop({ required: true }) private sortBy!: string;

        private get filteredItems() {
            return sortBy(this.items.filter((x) => x.visible === true), 'order');
        }
    }
</script>

<style lang="scss" src="./TableHeader.scss">
</style>
