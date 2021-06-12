import state from './state';
import mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

const module = { state, mutations, actions, getters, namespaced: true };

export default { module };
