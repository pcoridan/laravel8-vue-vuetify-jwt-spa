import Vue from 'vue';
import VueRouter from 'vue-router';
import Store from '@/store';

const LoginPage = () => import('@/views/login');
const SiteDashboard = () => import('@/views/dashboard');

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login-page',
    component: LoginPage,
  },
  {
    path: '/',
    name: 'site-dashboard',
    component: SiteDashboard,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach( (to, from, next) => {

  // Check Auth before each route
  if (to.name !== 'login-page' && !Store.getters['auth/authenticated']){
      next({ name: 'login-page' });
  } else {
      next();
  }

});

export default router;
