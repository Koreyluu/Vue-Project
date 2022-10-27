import { createApp } from 'vue'
import index from './index.vue'
import router from './router'
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap"

const app = createApp(index);
app.use(router)
app.mount('#app')


