import { createStore } from 'vuex';
import getters from './getters';
import mutations from './mutations';

export default createStore({
  state: {
    count: 0,
  },
  getters,
  mutations,
});
