export default [
  {
    name: 'dashboard',
    path: '/dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ './main'),
  },
];
