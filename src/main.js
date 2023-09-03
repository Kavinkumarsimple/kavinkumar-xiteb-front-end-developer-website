import { createApp } from 'vue'
import VueCarousel from '@chenfengyuan/vue-carousel';
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import '@popperjs/core/dist/umd/popper.min.js';
import './assets/js/jquery.min.js';




createApp(App).use(router, VueCarousel, VueCarousel.name).mount('#app')
