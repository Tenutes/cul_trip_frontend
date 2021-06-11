import Vue from 'vue';
import Root from './Root.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import httpPlugin from './plugins/http';
import { sync } from 'vuex-router-sync';

Vue.use(httpPlugin, { store, router });
Vue.config.productionTip = false;

sync(store, router);

new Vue({
  router,
  store,
  render: h => h(Root),
}).$mount('#app');
