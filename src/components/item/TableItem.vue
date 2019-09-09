<template>
    <div class="table-item">
        <div
            v-for="(el, index) in order"
            :key="index"
            :style="{ width: el.width + 'px' }"
            class="table-item__item"
        >

            {{ contact[el.title] }}
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from '@/vue-script';

    @Component({})
    export default class TableItem extends Vue {
        @Prop({ required: true }) private contact!: any;
        @Prop({ required: true }) private order!: string[];
    }
</script>

<style lang="scss" src="./TableItem.scss">
</style>
