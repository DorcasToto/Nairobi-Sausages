<template>
  <layout-bar>
    <table class="custom-table" v-if="getSoldBatches.length > 0">
      <thead>
      <tr>
        <th>Breed</th>
        <th>Age</th>
        <th>Weight</th>
        <th>Price</th>
        <th>How many</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(soldBatch, index) in getSoldBatches" :key="index">
        <td>{{ soldBatch.breed }}</td>
        <td>{{ soldBatch.age }}</td>
        <td>{{ soldBatch.weight }}</td>
        <td>{{ soldBatch.price }}</td>
        <td>{{ soldBatch.count }}</td>
        <td></td>
      </tr>
      </tbody>
    </table>
    <div v-else>
      <div class="ordered-feeds-container">
        <div>
          <p>You do not have an Sold pigs yet.Click the button below to Sell your pigs</p>
          <button class="auth-button" @click="soldBatches">Sell Batch</button>
        </div>
      </div>
    </div>
  </layout-bar>
</template>
<script>
import { mapGetters } from 'vuex';
import layoutBar from '@/components/dashboard/layoutBar.vue';

export default {
  components: {
    layoutBar,
  },
  computed: {
    ...mapGetters(['getSoldBatches']),
  },
  methods: {
    soldBatches() {
      this.$router.push('/sell-batch');
    },
  },
};
</script>
