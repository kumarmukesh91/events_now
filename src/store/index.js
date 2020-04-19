import Vue from 'vue';
import Vuex from 'vuex';

import * as user from './modules/user';
import * as event from './modules/event';
import * as notification from './modules/notification';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    event,
    notification
  }
});

// Note
// Actions, Mutations, and Getters (even inside modules) are all registered under the global namespace.
