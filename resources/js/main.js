import { createApp } from 'vue'
import '../../resources/sass/null.scss'
import App from './App.vue';
import router from './router/router.js'
import store from "./store";
// import '../../resources/sass/null.scss'

createApp(App).use(router).use(store).mount('#app');



