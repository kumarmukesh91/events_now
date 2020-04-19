export const namespaced = true;

let nextId = 1;

export const state = {
  notifications: []
};

export const mutations = {
  ADD_NOTIFICATION(state, notification) {
    state.notifications.push({
      ...notification,
      id: nextId++
    });
  },
  REMOVE_NOTIFICATION(state, id) {
    state.notifications = state.notifications.filter(
      notification => notification.id !== id
    );
  }
};

export const actions = {
  add({ commit }, notification) {
    commit('ADD_NOTIFICATION', notification);
  },
  remove({ commit }, id) {
    commit('REMOVE_NOTIFICATION', id);
  }
};
