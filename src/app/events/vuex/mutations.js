import * as TYPES from './mutations-types';

export default {
  [TYPES.SET_EVENTS](state, payload) {
    state.events = payload;
  },
  [TYPES.SET_EVENT](state, payload) {
    state.event = payload;
  },
  [TYPES.SET_FETCHING](state, { field, value }) {
    state.fetching[field] = value;
  },
};
