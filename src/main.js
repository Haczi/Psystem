import { createApp } from 'vue';
import { library } from "@fortawesome/fontawesome-svg-core";

import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();
import VueSplide from '@splidejs/vue-splide';
import VueNumber from 'vue-number-animation';
// import Observer from 'vue-intersection-observer';
import router from './router.js';
import App from './App.vue';
const app = createApp(App)
app.use(VueNumber);
// app.use(Observer);
app.use(router);
app.use( VueSplide );
app.mount('#app');
