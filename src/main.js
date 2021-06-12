import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import Root from './Root.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import httpPlugin from './plugins/http';
import 'normalize.css';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ru-RU';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(httpPlugin, { store });
Vue.use(ElementUI, { locale });
sync(store, router);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(Root),
}).$mount('#app');
