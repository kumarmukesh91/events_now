<template>
  <div class="event-list">
    <div class="row">
      <div class="col-md-4" v-for="event in events" :key="event.id">
        <EventCard :event="event" />
      </div>
    </div>
    <div class="btn-group" role="group">
      <router-link
        rel="prev"
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        :class="['btn', 'btn-primary', page == 1 ? 'disabled' : '']"
      >Prev Page</router-link>
      <router-link
        :to="{ name: 'event-list', query: { page: page + 1 } }"
        :class="['btn', 'btn-primary', page === maxPage ? 'disabled' : '']"
      >Next Page</router-link>
    </div>
  </div>
</template>

<script>
import NProgress from 'nprogress';
import { mapState } from 'vuex';
import EventCard from '@/components/EventCard.vue';
import store from '@/store';

function fetchEvents(routeTo, next) {
  const page = parseInt(routeTo.query.page) || 1;
  const limit = parseInt(routeTo.query.limit) || 5;
  NProgress.start();
  store
    .dispatch('event/getEvents', { page, limit })
    .then(() => {
      NProgress.done();
      routeTo.params.page = page;
      routeTo.params.limit = limit;
      next();
    })
    .catch(() => {
      NProgress.done();
      next();
    });
}

export default {
  props: {
    page: {
      type: Number,
      required: true
    },
    limit: {
      type: Number,
      required: true
    }
  },
  components: {
    EventCard
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    fetchEvents(routeTo, next);
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    fetchEvents(routeTo, next);
  },

  computed: {
    maxPage() {
      return parseInt(this.totalEvents) / this.limit;
    },
    ...mapState({
      events: state => state.event.events,
      totalEvents: state => state.event.totalEvents
    })
  }
};
</script>

<style scoped>
.event-list {
  margin: 20px 0;
}
.btn-group {
  margin-top: 20px;
  justify-content: center;
}
</style>
