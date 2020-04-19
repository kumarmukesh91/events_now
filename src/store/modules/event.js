import EventService from '@/services/EventService';

export const namespaced = true;

export const state = {
  events: [],
  event: null,
  totalEvents: 0
};

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event);
  },
  SET_EVENTS(state, events) {
    state.events = events;
  },
  SET_EVENT(state, event) {
    state.event = event;
  },
  SET_TOTAL_EVENTS(state, count) {
    state.totalEvents = count;
  }
};

export const actions = {
  addEvent({ commit, dispatch }, event) {
    return EventService.addEvent(event)
      .then(res => {
        commit('ADD_EVENT', res.data);
        const notification = {
          type: 'success',
          message: 'Your event has been created!'
        };
        dispatch('notification/add', notification, { root: true });
        return res.data;
      })
      .catch(err => {
        dispatch(
          'notification/add',
          {
            type: 'error',
            message: 'There was a problem creating event: ' + err.message
          },
          { root: true }
        );
      });
  },
  getEvents({ commit, dispatch }, { page, limit }) {
    return EventService.getEvents(page, limit)
      .then(res => {
        commit('SET_EVENTS', res.data);
        commit('SET_TOTAL_EVENTS', res.headers['x-total-count']);
      })
      .catch(err => {
        dispatch(
          'notification/add',
          {
            type: 'error',
            message: 'There was a problem fetching events: ' + err.message
          },
          { root: true }
        );
      });
  },
  getEvent({ commit, getters }, id) {
    const event = getters.getEventById(id);
    if (event) {
      commit('SET_EVENT', event);
      return event;
    } else {
      return EventService.getEvent(id).then(res => {
        commit('SET_EVENT', res.data);
        return res.data;
      });
    }
  }
};

export const getters = {
  getEventById: state => id => state.events.find(event => event.id === id)
};
