import Vue from 'vue';
import Root from './Root.vue';
import store from './store';
import './registerServiceWorker';
import httpPlugin from './plugins/http';

Vue.use(httpPlugin, { store });
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(Root),
}).$mount('#app');
