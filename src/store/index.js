import Vue from 'vue';
import Vuex from 'vuex';
import VuexWebExtensions from 'vuex-webextensions';

import * as getters from './getters';
import mutations from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        scroll: localStorage.getItem('scroll') || { color: { track: '#900', thumb: '#900' }, width: '5px' },
    },
    getters,
    mutations,
    actions,
    plugins: [VuexWebExtensions()],
});
