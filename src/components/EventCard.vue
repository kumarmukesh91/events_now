<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ event.title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ event.location }}</h6>
      <p class="card-text">
        {{ event.description }}
      </p>
      <router-link
        :to="{ name: 'event-details', params: { id: event.id } }"
        class="card-link"
      >
        Details
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
