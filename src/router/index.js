import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/auth/loginView.vue';
import signUp from '@/views/auth/signUp.vue';
import forgotPassword from '@/views/auth/forgotPassword.vue';
import farmerDashboard from '@/components/dashboard/farmerDashboard.vue';
import postDetails from '@/views/posts/postDetails.vue';
import sellBatch from '@/views/batches/sellBatch.vue';
import sendBatch from '@/views/batches/sendBatch.vue';
import orderFeeds from '@/views/feeds/orderFeeds.vue';
import orderedFeeds from '@/views/feeds/orderedFeeds.vue';
import sentBatches from '@/views/batches/sentBatches.vue';
import soldBatches from '@/views/batches/soldBatches.vue';

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
    path: '/post-details',
    name: 'PostDetails',
    component: postDetails,
  },
  {
    path: '/sell-batch',
    name: 'SellBatch',
    component: sellBatch,
  },
  {
    path: '/send-batch',
    name: 'SendBatch',
    component: sendBatch,
  },
  {
    path: '/order-feeds',
    name: 'OrderFeeds',
    component: orderFeeds,
  },
  {
    path: '/ordered-feeds',
    name: 'OrderedFeeds',
    component: orderedFeeds,
  },
  {
    path: '/sent-batches',
    name: 'SentBatches',
    component: sentBatches,
  },
  {
    path: '/sold-batches',
    name: 'SoldBatches',
    component: soldBatches,
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
