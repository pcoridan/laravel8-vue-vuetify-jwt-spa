import Vue from 'vue';
import Vuex from 'vuex';
import StoreAuth from '@/store/modules/auth';

Vue.use(Vuex);

/**
 * Setup vuex store and register modules.
 */
const store = new Vuex.Store({
  modules: {
    auth: StoreAuth,
  },
});

export default store;
