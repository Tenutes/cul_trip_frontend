export default [
  {
    name: 'event',
    path: '/events/:id',
    component: () => import(/* webpackChunkName: "events" */ './main'),
  },
];
