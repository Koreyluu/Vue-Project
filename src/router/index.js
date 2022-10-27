import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/GameSearch.vue';
import saved from '@/views/SavedGames.vue';
import login from '@/components/LoginForm.vue';
import signup from '@/components/SignupForm.vue';


const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/saved',
    name: 'saved',
    component: saved,
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
