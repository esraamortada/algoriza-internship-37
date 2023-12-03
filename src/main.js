import { createApp } from 'vue'
import './assets/tailwind.css'
const app =createApp(Landing);

import {createPinia} from 'pinia'
// import {authStore} from '@/Stores'

import Landing from './Landing.vue'
import router from './Routers/index'

// const pinia =createPinia();

//  app.use(pinia);
 app.use(router);
 app.mount('#app')
