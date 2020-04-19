<template>
  <div id="app" class="container-fluid">
    <NavBar />
    <NotificationContainer />
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import NotificationContainer from '@/components/NotificationContainer.vue';

export default {
  components: {
    NavBar,
    NotificationContainer
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
