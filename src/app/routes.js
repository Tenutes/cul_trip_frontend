import { routes as Dashboard } from './dashboard';
import { routes as Main } from './main';

export default [
  ...Main,
  ...Dashboard,
  {
    path: '*',
    redirect: { name: 'main' },
  },
];
