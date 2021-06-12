export default [
  {
    name: 'events',
    path: '/events',
    component: () => import(/* webpackChunkName: "events" */ './main'),
    children: [
      {
        name: 'event',
        path: ':id',
        component: () => import(/* webpackChunkName: "events" */ './main'),
      },
    ]
  },
];
