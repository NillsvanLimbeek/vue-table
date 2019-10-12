import { shallowMount } from '@vue/test-utils';

import Dropdown from '../Dropdown.vue';

const component = (values = {}) => {
    return shallowMount(Dropdown, {
        propsData: {
            ...values,
        },
    });
};

describe('Dropdown', () => {
    it('Renders a dropdown', () => {
        const wrapper = component({
            title: 'Test',
        });

        expect(wrapper.contains('.dropdown')).toBe(true);
    });
});
