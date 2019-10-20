import Vue from 'vue';

import { Filter } from './data';

const filters: Filter[] = [
    {
        prefix: 'and',
        item: 'firstName',
        operator: 'contains...',
    },
];

export const store = Vue.observable({
    filters,
});

export const mutations = {
    addFilter(filter: Filter) {
        store.filters.push(filter);
    },

    // TODO with index
    updateFilter(filter: Filter) {
        store.filters.splice(0, 1, filter);
    },
};
