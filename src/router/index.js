import Vue from 'vue';
import Router from 'vue-router';
import { routes as app } from '../app';

Vue.use(Router);
const routes = [...app];
console.log(app);
const router = new Router({
  routes,
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 160 },
      };
    }
    return { x: 0, y: 0 };
  },
});

export default router;
