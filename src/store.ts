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

export const mutation = {
    addFilter(filter: Filter) {
        store.filters.push(filter);
    },
};
