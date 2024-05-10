import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './assets/styles/common.scss';
const store = createPinia();
createApp(App).use(router).use(store).mount('#app');
//# sourceMappingURL=main.js.map