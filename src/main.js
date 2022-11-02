import { createApp } from 'vue'
import gamesData from '@/store';
import index from './index.vue'
import router from './router'


const app = createApp(index);
app.use(router)
app.use(gamesData)
app.mount('#app')
