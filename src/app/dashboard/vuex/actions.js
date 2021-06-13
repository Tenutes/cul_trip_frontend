import { http } from '../../../plugins/http';
import * as TYPES from './mutations-types';

export const loadRecommendations = ({ dispatch }) => {
  dispatch('setFetching', { field: 'recommendations', value: true });
  return http
    .get('/events')
    .then(({ data }) => {
      dispatch('setRecommendations', data.slice(0, 5));
      dispatch('setFetching', { field: 'recommendations', value: false });
    });
};

export const loadNewEvents = ({ dispatch }) => {
  dispatch('setFetching', { field: 'newEvents', value: true });
  return http
    .get('/events')
    .then(({ data }) => {
      dispatch('setNewEvents', data.slice(5, 10));
      dispatch('setFetching', { field: 'newEvents', value: false });
    });
};

export const loadCompilations = ({ dispatch }) => {
  dispatch('setFetching', { field: 'compilations', value: true });
  return http
    .get('/events')
    .then(({ data }) => {
      dispatch('setCompilations', data.slice(10, 15));
      dispatch('setFetching', { field: 'compilations', value: false });
    });
};

export const loadEvents = ({ dispatch }, params) => {
  dispatch('setFetching', { field: 'filter', value: true });
  return http
    .get(`/events?${params}`)
    .then(({ data }) => {
      dispatch('setFetching', { field: 'filter', value: false });
      return data;
    });
};

export const setRecommendations = ({ commit }, payload) => commit(TYPES.SET_RECOMMENDATIONS, payload);
export const setNewEvents = ({ commit }, payload) => commit(TYPES.SET_NEW_EVENTS, payload);
export const setCompilations = ({ commit }, payload) => commit(TYPES.SET_COMPILATIONS, payload);
export const setFetching = ({ commit }, payload) => commit(TYPES.SET_FETCHING, payload);
