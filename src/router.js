import { createRouter, createWebHistory } from 'vue-router';

import FirstPageInstalation from './pages/instalation/FirstPageInstalation.vue';
import MainPage from './components/layout/MainPage.vue';
// import CoachRegistation from './pages/coaches/CoachRegistration.vue';
// import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/psystem',name:'MainPage', component: MainPage },
    { path: '/instalation', component: FirstPageInstalation },
    // {
    //   path: '/coaches/:id',
    //   component: CoachDetail,
    //   children: [
    //     { path: 'contact', component: ContactCoach } // /coaches/c1/contact
    //   ]
    // },
    // { path: '/register', component: CoachRegistation },
    { path: '/requests', component: RequestsReceived },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
