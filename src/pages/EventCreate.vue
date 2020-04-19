<template>
  <div class="row justify-content-md-center">
    <div class="col-md-6">
      <form @submit.prevent="addEvent">
        <div class="form-group">
          <label for="inputTitle">Title</label>
          <input
            type="text"
            class="form-control"
            id="inputTitle"
            placeholder="Title"
            v-model="event.title"
          />
        </div>

        <div class="form-group">
          <label for="inputDescription">Description</label>
          <textarea class="form-control" id="inputDescription" rows="3" v-model="event.description"></textarea>
        </div>

        <div class="form-group">
          <label for="inputAddress1">Address</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress1"
            placeholder="1234 Main St"
            v-model="event.address1"
          />
        </div>

        <div class="form-group">
          <label for="inputAddress2">Address 2</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
            v-model="event.address2"
          />
        </div>

        <div class="form-row">
          <div class="form-group col-md-5">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity" v-model="event.city" />
          </div>

          <div class="form-group col-md-5">
            <label for="inputState">State</label>
            <input type="text" class="form-control" id="inputState" v-model="event.state" />
          </div>

          <div class="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" class="form-control" id="inputZip" v-model="event.zip" />
          </div>
        </div>

        <div class="form-row justify-content-md-center">
          <button type="submit" class="btn btn-primary">Add Event</button>
          <button class="btn btn-danger ml-2">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import NProgress from 'nprogress';

export default {
  data() {
    return {
      event: {
        title: '',
        description: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: ''
      }
    };
  },

  methods: {
    addEvent() {
      NProgress.start();
      this.$store
        .dispatch('event/addEvent', this.event)
        .then(data => {
          this.$router.push({
            name: 'event-details',
            params: { id: data.id }
          });
        })
        .catch(() => {
          NProgress.end();
        });
    }
  }
};
</script>

<style scoped></style>
