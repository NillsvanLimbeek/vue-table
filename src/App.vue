<template>
    <div id="app">
        <Table />
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from '@/vue-script';

    const Table = () => import('@/components/table/Table.vue');

    @Component({
        components: {
            Table,
        },
    })
    export default class App extends Vue {}
</script>

<style lang="scss" src="./scss/main.scss">
</style>
