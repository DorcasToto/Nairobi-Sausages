<template>
  <layout-bar>
    <table class="custom-table" v-if="getOrderedFeeds.length > 0">
      <thead>
      <tr>
        <th>Feed Type</th>
        <th>Age</th>
        <th>Weight</th>
        <th>Price(KES)</th>
        <th>Delivery Address</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(orderedFeed, index) in getOrderedFeeds" :key="index">
        <td>{{ orderedFeed.feedType }}</td>
        <td>{{ orderedFeed.age }}</td>
        <td>{{ orderedFeed.weight }}</td>
        <td>{{ orderedFeed.price }}</td>
        <td>{{ orderedFeed.address }}</td>
      </tr>
      </tbody>
    </table>
    <div v-else>
      <div class="ordered-feeds-container">
        <div>
          <p>You do not have an ordered fields yet.Click the button below to order</p>
          <button class="auth-button" @click="orderFeeds">Order Feeds</button>
        </div>
    </div>
    </div>
  </layout-bar>
</template>
<script>
import layoutBar from '@/components/dashboard/layoutBar.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    layoutBar,
  },
  computed: {
    ...mapGetters(['getOrderedFeeds']),
  },
  methods: {
    orderFeeds() {
      this.$router.push('order-feeds');
    },
  },
};
</script>
