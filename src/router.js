import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
    // },
    {
      path: '/autobiography',
      name: 'autobiography',
      component: () => import( '@/views/Autobiography.vue'),
    },
    {
      path: '/activities',
      name: 'activities',
      component: () => import( '@/views/Activities.vue'),
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import( '@/views/Skills.vue'),
    },
    {
      path: '/studyplan',
      name: 'studyplan',
      component: () => import( '@/views/StudyPlan.vue'),
    },
  ],
});
