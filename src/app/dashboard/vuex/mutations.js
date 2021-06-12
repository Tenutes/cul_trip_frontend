import * as TYPES from './mutations-types';

export default {
  [TYPES.SET_RECOMMENDATIONS](state, payload) {
    state.recommendations = payload;
  },
  [TYPES.SET_NEW_EVENTS](state, payload) {
    state.newEvents = payload;
  },
  [TYPES.SET_COMPILATIONS](state, payload) {
    state.compilations = payload;
  },
  [TYPES.SET_FETCHING](state, { field, value }) {
    state.fetching[field] = value;
  },
};
