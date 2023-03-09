import { createRouter, createWebHashHistory } from 'vue-router'
import CartMain from '../components/carts/CartMain.vue'

const routes = [
    {
        path: '/',
        component: CartMain
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router