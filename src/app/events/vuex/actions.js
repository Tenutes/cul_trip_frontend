import { http } from '../../../plugins/http';
import * as TYPES from './mutations-types';

export const loadEvents = ({ dispatch }) => {
  dispatch('setFetching', { filed: 'events', value: true });
  return http
    .get('events')
    .then(({ data }) => data)
    .then(({ data }) => {
      dispatch('setEvents', data);
      dispatch('setFetching', { filed: 'events', value: false });
    });
};

export const loadEvent = ({ dispatch }, id) => {
  dispatch('setFetching', { filed: 'event', value: true });
  return http
    .get(`/events/${id}`)
    .then(({ data }) => data)
    .then(({ data }) => {
      dispatch('setEvent', data);
      dispatch('setFetching', { filed: 'event', value: false });
    });
};

export const setEvents = ({ commit }, payload) => commit(TYPES.SET_EVENTS, payload);
export const setEvent = ({ commit }, payload) => commit(TYPES.SET_EVENT, payload);
export const setFetching = ({ commit }, payload) => commit(TYPES.SET_FETCHING, payload);
