/* tslint:disable */
import Vue from 'vue';
import { DirectiveOptions } from 'vue';

const clickOutside: DirectiveOptions = {
    bind(el: any, binding) {
        el.__ClickOutsideHandler__ = (event: any) => {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value(event);
            }
        };

        document.body.addEventListener('click', el.__ClickOutsideHandler__);
    },

    unbind(el: any) {
        document.body.removeEventListener('click', el.__ClickOutsideHandler__);
    },
};

Vue.directive('click-outside', clickOutside);
