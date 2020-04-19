<template>
  <div class="alert alert-warning alert-dismissible fade show" role="alert">
    {{ notification.message }}
    <button
      type="button"
      class="close"
      data-dismiss="alert"
      aria-label="Close"
      @click="remove(notification.id)"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.timer = setTimeout(() => this.remove(this.notification.id), 3000);
  },
  destroyed() {
    clearTimeout(this.timer);
  },
  methods: mapActions('notification', ['remove'])
};
</script>

<style scoped></style>
