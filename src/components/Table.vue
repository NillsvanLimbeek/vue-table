<template>
      <TableData url="/contacts.json">
        <template v-slot="{ data: contacts }">
           <div>
                <ul>
                    <li v-for="contact in contacts" :key="contact.id">
                        {{ contact.firstName }}
                    </li>
                </ul>
           </div>
        </template>
      </TableData>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from '@/vue-script';

    const TableData = () => import('./TableData.vue');

    @Component({
        components: {
            TableData,
        },
    })
    export default class Table extends Vue {}
</script>

<style lang="scss">
</style>
