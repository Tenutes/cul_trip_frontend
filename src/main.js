import Vue from 'vue';
import Root from './Root.vue';
import store from './store';
import './registerServiceWorker';
import httpPlugin from './plugins/http';
import 'normalize.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/ru-RU';

Vue.use(httpPlugin, { store });
Vue.use(ElementUI, { locale });
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(Root),
}).$mount('#app');
