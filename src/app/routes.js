import { routes as Dashboard } from './dashboard';
import { routes as Events } from './events';

export default [
  ...Dashboard,
  ...Events,
  {
    path: '*',
    redirect: { name: 'dashboard' },
  },
];
