import axios from 'axios';
import interceptors from './interceptors';
import { apiUrl } from '../../config';

export const http = axios.create({
  baseURL: apiUrl,
});

export default function install(Vue, { store, router }) {
  interceptors(http, store, router);
  Object.defineProperty(Vue.prototype, '$http', {
    get() {
      return http;
    },
  });
}
