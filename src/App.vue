<template>
  <div id="app" class="container-fluid">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    NavBar
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
