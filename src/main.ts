import { createApp } from 'vue'
import '@/lib/style/hxUi.scss'
import './style.scss'
import 'hx-gulu-ui/dist/lib/hxui.css'
import App from './App.vue'
import { router } from './router'
import 'github-markdown-css'
import hxMessageBox from './lib/hxMessageBox/index'


const app = createApp(App)
app.config.globalProperties.$baseImg = 'http://testpc.no19.35nic.com/urlproject/hx-gulu-ui/images/'
app.use(router)

app.use(hxMessageBox)

app.mount('#app')
