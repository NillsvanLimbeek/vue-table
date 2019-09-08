<template>
    <div class="table-header">
        <div
            class="table-header__item"
            v-for="(el, index) in order"
            :key="index"
            :style="{ width: el.width + 'px' }"
            @click="$emit('change-sort', el.title)"
        >

            {{ el.title | splitByUppercase | uppercase }}

            <i
                v-if="sortBy === el.title || sortBy === `-${el.title}`"
                class="table-header__item-icon fas fa-chevron-up"
                :class="{ 'table-header__item-icon--rotated': el.title === sortBy }"
            />
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    @Component({})
    export default class TableHeader extends Vue {
        @Prop({ required: true }) private order!: string[];
        @Prop({ required: true }) private sortBy!: string;
    }
</script>

<style lang="scss" src="./TableHeader.scss">
</style>a
