import { http } from '../../../plugins/http';
import * as TYPES from './mutations-types';

export const loadRecommendations = ({ dispatch }) => {
  dispatch('setFetching', { filed: 'recommendations', value: true });
  return http
    .get('/events/recommendations')
    .then(({ data }) => data)
    .then(({ data }) => {
      dispatch('setRecommendations', data);
      dispatch('setFetching', { filed: 'recommendations', value: false });
    });
};

export const loadNewEvents = ({ dispatch }) => {
  dispatch('setFetching', { filed: 'newEvents', value: true });
  return http
    .get('/events/new')
    .then(({ data }) => data)
    .then(({ data }) => {
      dispatch('setNewEvents', data);
      dispatch('setFetching', { filed: 'newEvents', value: false });
    });
};

export const loadCompilations = ({ dispatch }) => {
  dispatch('setFetching', { filed: 'compilations', value: true });
  return http
    .get('/events/compilations')
    .then(({ data }) => data)
    .then(({ data }) => {
      dispatch('setCompilations', data);
      dispatch('setFetching', { filed: 'compilations', value: false });
    });
};

export const loadEventsBySearch = ({ dispatch }, search) => {
  dispatch('setFetching', { filed: 'search', value: true });
  return http
    .get('/events', { params: search })
    .then(({ data }) => {
      dispatch('setFetching', { filed: 'search', value: false });
      return data;
    });
};

export const setRecommendations = ({ commit }, payload) => commit(TYPES.SET_RECOMMENDATIONS, payload);
export const setNewEvents = ({ commit }, payload) => commit(TYPES.SET_NEW_EVENTS, payload);
export const setCompilations = ({ commit }, payload) => commit(TYPES.SET_COMPILATIONS, payload);
export const setFetching = ({ commit }, payload) => commit(TYPES.SET_FETCHING, payload);
