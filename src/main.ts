import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import router from './router'
import VueAmap, {initAMapApiLoader} from "@vuemap/vue-amap";
import { createPinia } from 'pinia'
import '@vuemap/vue-amap/dist/style.css'
initAMapApiLoader({
    key:'d1316c0d2d883a7a6906bd044ddab649',
    securityJsCode:'69550ebaa497ec2d66da2393152a40ab',
})
const pinia = createPinia()
createApp(App)
    .use(ElementPlus)
    .use(router)
    .use(pinia)
    .use(VueAmap)
    .mount('#app')
