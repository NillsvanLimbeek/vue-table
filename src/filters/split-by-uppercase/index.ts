import Vue from 'vue';
import splitByUppercase from './split-by-uppercase';

export default splitByUppercase;

Vue.filter('splitByUppercase', splitByUppercase);
