import { createApp } from 'vue'
import '@/lib/style/hxUi.scss'
import './style.scss'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import App from './App.vue'
import { router } from './router'
import 'github-markdown-css'


const app = createApp(App)
app.config.globalProperties.$baseImg = 'http://testpc.no19.35nic.com/urlproject/hx-gulu-ui/images/'
app.use(ElementPlus)
app.use(router)
app.mount('#app')
