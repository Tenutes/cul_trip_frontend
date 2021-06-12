export default [
  {
    name: 'dashboard',
    path: '/',
    component: () => import(/* webpackChunkName: "dashboard" */ './main'),
  },
];
