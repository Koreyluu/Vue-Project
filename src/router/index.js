import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/GameSearch.vue'
import saved from '@/views/SavedGames.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/saved',
    name: 'saved',
    component: saved,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
