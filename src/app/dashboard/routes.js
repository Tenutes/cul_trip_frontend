export default [
  {
    name: 'dashboard',
    path: '/',
    component: () => import(/* webpackPrefetch: true, webpackChunkName: "dashboard" */ './main'),
    meta: { requiresAuth: true },
  },
];
