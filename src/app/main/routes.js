export default [
  {
    name: 'main',
    path: '/',
    component: () => import(/* webpackChunkName: "main" */ './main'),
  },
];
