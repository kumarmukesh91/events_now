<template>
  <div>{{ event.title }}</div>
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

<style scoped></style>
