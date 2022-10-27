import { createApp } from 'vue'
import index from './index.vue'
import router from './router'

const app = createApp(index);
app.use(router)
app.mount('#app')


