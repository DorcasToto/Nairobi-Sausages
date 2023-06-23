import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/auth/loginView.vue';
import signUp from '@/views/auth/signUp.vue';
import forgotPassword from '@/views/auth/forgotPassword.vue';
import farmerDashboard from '@/components/dashboard/farmerDashboard.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: signUp,
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: forgotPassword,
  },
  {
    path: '/dashboard',
    name: 'FarmerDashboard',
    component: farmerDashboard,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
