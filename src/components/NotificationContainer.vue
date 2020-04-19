<template>
  <div>
    <NotificationBar
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import NotificationBar from './NotificationBar';

export default {
  components: {
    NotificationBar
  },
  computed: mapState('notification', ['notifications'])
};
</script>

<style scoped></style>
