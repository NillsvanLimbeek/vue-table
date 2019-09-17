<template>
    <div
        class="header-item"
        :style="{ width: item.width + 'px' }"
        @click="sortItems">

        {{ item.title | splitByUppercase | uppercase }}

        <i
            v-if="sortBy === item.title || sortBy === `-${item.title}`"
            class="header-item__icon fas fa-chevron-up"
            :class="{ 'header-item__icon--rotated': item.title === sortBy }"
        />
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    import { TableItem } from '@/data';

    @Component({})
    export default class HeaderItem extends Vue {
        @Prop({ required: true }) private item!: TableItem;
        @Prop({ required: true }) private sortBy!: any;

        private sortItems(e: MouseEvent): void {
            if (e.shiftKey) {
                const titles: string[] = [this.sortBy, this.item.title];
                this.$emit('sort', titles);
            } else {
                this.$emit('sort', this.item.title);
            }
        }
    }
</script>

<style lang="scss" src="./HeaderItem.scss">
</style>
