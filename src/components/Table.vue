<template>
    <div>

        <TableData
            url="/contacts.json"
            :sort="choice"
        >
            <template v-slot="{ data: contacts }">
                <div>
                    <ul>
                        <li
                            v-for="contact in contacts"
                            :key="contact.id"
                        >
                            {{ contact.firstName }} {{ contact.lastName }} {{ contact.age }}
                        </li>
                    </ul>
                </div>
            </template>
        </TableData>

        <label for="sort-by">Sort by:</label>

        <select
            id="sort-by"
            v-model="choice"
        >
            <option
                v-for="choice in sortChoices"
                :value="choice"
                @change="select = $event"
            >
                {{ choice }}
            </option>
        </select>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from '@/vue-script';

    const TableData = () => import('./TableData.vue');

    @Component({
        components: {
            TableData,
        },
    })
    export default class Table extends Vue {
        private sortBy: string | null = 'lastName';
        private sortChoices: string[] = ['firstName', 'lastName', 'age'];

        private choice: string | null = null;
    }
</script>

<style lang="scss">
</style>
