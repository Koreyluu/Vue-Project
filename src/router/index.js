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
    path: '/home-list',
    name: 'home-list',
    component: GameList,
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: GameEdit,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
