import Vue from 'vue';
import VueRouter from 'vue-router';

import EventList from '@/pages/EventList.vue';
import EventCreate from '@/pages/EventCreate.vue';
import EventDetails from '@/pages/EventDetails.vue';
import NotFoundComponent from '@/components/NotFoundComponent.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList
  },
  {
    path: '/events/new',
    name: 'event-create',
    component: EventCreate
  },
  {
    path: '/events/:id/edit',
    name: 'event-edit',
    component: EventCreate
  },
  {
    path: '/events/:id',
    name: 'event-details',
    component: EventDetails,
    props: true
  },
  { path: '*', component: NotFoundComponent }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
