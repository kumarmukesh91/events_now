<template>
  <div v-if="event">
    {{ event.title }}
  </div>
</template>

<script>
import EventService from '@/services/EventService';
export default {
  props: ['id'],
  data() {
    return {
      event: null
    };
  },
  async created() {
    try {
      const res = await EventService.getEvent(this.id);
      this.event = res.data;
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style lang="scss" scoped></style>
