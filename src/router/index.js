import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

import store from '@/store';
import EventList from '@/pages/EventList.vue';
import EventCreate from '@/pages/EventCreate.vue';
import EventDetails from '@/pages/EventDetails.vue';
import NotFound from '@/components/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventList,
    props: true
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
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store
        .dispatch('event/getEvent', routeTo.params.id)
        .then(event => {
          routeTo.params.event = event;
          next();
        })
        .catch(() => {
          next({ name: '404', params: { resource: 'event' } });
        });
    }
  },
  { path: '404', name: '404', component: NotFound, props: true },
  { path: '*', redirect: { name: '404', params: { resource: 'page' } } }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
