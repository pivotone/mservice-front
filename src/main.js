import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'
import router from './router'
import store from './store'
import api from './service/api'

const app = createApp(App)
app.config.globalProperties.$api=api
app.use(VueAxios, axios).use(qs).use(router).use(store)
app.mount('#app')