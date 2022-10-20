import { createApp } from 'vue'
import index from './index.vue'
import router from './router'
// import Vue from 'vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)

const app = createApp(index);
app.use(router)
app.mount('#app')


