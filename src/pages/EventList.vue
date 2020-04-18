<template>
  <div class="row event-list">
    <div class="col-md-4" v-for="event in events" :key="event.id">
      <EventCard :event="event" />
    </div>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';
import EventService from '@/services/EventService.js';

export default {
  data() {
    return {
      events: []
    };
  },
  components: {
    EventCard
  },
  async created() {
    try {
      const res = await EventService.getEvents();
      this.events = res.data;
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style scoped>
.event-list {
  margin-top: 20px;
}
</style>
