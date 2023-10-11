import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHashHistory, createRouter } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('./components/Hunag.vue')
        }
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
