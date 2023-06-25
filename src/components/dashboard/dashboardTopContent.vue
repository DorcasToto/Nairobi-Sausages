<template>
    <div class="card-container">
      <div class="card-center">
        <div class="card-number-container">
          <div class="card-number">{{ getFarms.count }}</div>
          <div class="card-separator">|</div>
          <div class="card-location">{{ getFarms.county }}</div>
        </div>
        <button class="card-button-primary"  @click="sendFeeds">Order Feeds</button>
      </div>
      <div class="card-center">
        <div class="card-number-container">
          <div class="card-location">Send pigs to us</div>
        </div>
        <button class="card-button-secondary" @click="sendBatch">Send Batch</button>
      </div>
      <div class="card-center">
        <div v-for="(batch, index) in getBatches" :key="index">
          <span class="card-number">{{ batch.count }}</span>
          <span class="card-separator">|</span>
          <span class="card-location">{{ batch.breed }}</span>
        </div>
        <button class="card-button-secondary" @click="sellBatch">Sell a Batch</button>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getBatches', 'getFarms']),
  },
  methods: {
    sendBatch() {
      this.$router.push('send-batch');
    },
    sellBatch() {
      this.$router.push('sell-batch');
    },
    sendFeeds() {
      this.$router.push('order-feeds');
    },
  },
};
</script>
