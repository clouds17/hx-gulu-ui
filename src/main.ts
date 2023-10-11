import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHashHistory, createRouter } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('./views/Home.vue')
        },
        {
            path: '/doc',
            component: () => import('./views/Doc.vue')
        }
    ]
})

const app = createApp(App)
app.config.globalProperties.$baseImg = 'http://testpc.no19.35nic.com/urlproject/hx-gulu-ui/images/'

app.use(router)
app.mount('#app')
