<template>
  <layout-bar>
    <table class="custom-table" v-if="getSentBatches.length > 0">
      <thead>
      <tr>
        <th>Breed</th>
        <th>Age</th>
        <th>Weight</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(sendBatch, index) in getSentBatches" :key="index">
        <td>{{ sendBatch.breed }}</td>
        <td>{{ sendBatch.age }}</td>
        <td>{{ sendBatch.weight }}</td>
        <td>{{ sendBatch.description }}</td>
      </tr>
      </tbody>
    </table>
    <div v-else>
      <div class="ordered-feeds-container">
        <div>
          <p>You do not have an ordered fields yet.Click the button below to order</p>
          <button class="auth-button" @click="sendBatch">Send batch</button>
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
    ...mapGetters(['getSentBatches']),
  },
  methods: {
    sendBatch() {
      return this.$router.push('/send-batch');
    },
  },
};
</script>
