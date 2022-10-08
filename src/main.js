import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// -----------------------------------------------------------
// Entry point for Global Scoped SCSS structure
// -----------------------------------------------------------
import './scss/main.scss';

createApp(App)
    .use(store)
    .use(router)
    .mount('#app');
