import { createApp } from 'vue'
import '@/lib/style/hxUi.scss'
import './style.scss'
import App from './App.vue'
import { router } from './router'


const app = createApp(App)
app.config.globalProperties.$baseImg = 'http://testpc.no19.35nic.com/urlproject/hx-gulu-ui/images/'

app.use(router)
app.mount('#app')
