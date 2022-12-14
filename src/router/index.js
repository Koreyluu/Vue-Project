import { createRouter, createWebHashHistory } from 'vue-router'
import GameList from '../views/GameList.vue';
import GameAdd from '../views/GameAdd.vue';
import GameEdit from '../views/GameEdit.vue';

const routes = [
  {
    path: '/add',
    name: 'add',
    component: GameAdd,
  },
  {
    path: '/',
    name: 'game-list',
    component: GameList,
  },
  {
    path: '/edit',
    name: 'edit',
    component: GameEdit,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
