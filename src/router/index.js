import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import about from '@/views/AboutView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: about,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
