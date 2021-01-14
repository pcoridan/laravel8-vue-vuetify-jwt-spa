import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import vuetify from '@/plugins/vuetify';

Vue.config.productionTip = false;

// On refresh lets check on the state of auth, instead of sending it every route load.
store.dispatch('auth/attempt', {
  token: localStorage.getItem('token'),
  ttl: localStorage.getItem('ttl')
}).then(() => {

    new Vue({
        router,
        store,
        vuetify,
        render: h => h(App)
    }).$mount('#app');
});
