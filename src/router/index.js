import { createRouter, createWebHashHistory } from 'vue-router'
import GameAdd from '../views/GameAdd.vue';
import saved from '@/views/SavedGames.vue';

const routes = [
  {
    path: '/home',
    name: 'home',
    component: GameAdd
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
