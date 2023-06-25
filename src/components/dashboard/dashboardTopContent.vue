<template>
    <div class="card-container">
      <div class="card-center">
        <div class="card-number-container">
          <div class="card-number">2</div>
          <div class="card-separator">|</div>
          <div class="card-location">Kiambu County</div>
        </div>
        <button class="card-button-primary"  @click="orderFeeds">Order Feeds</button>
      </div>
      <div class="card-center">
        <div class="card-number-container">
          <div class="card-location">Send pigs to us</div>
        </div>
        <button class="card-button-secondary" @click="sendBatch">Send Batch</button>
      </div>
      <div class="card-center">
        <div class="card-number-container">
          <div class="card-number">2</div>
          <div class="card-separator">|</div>
          <div class="card-location">Large White</div>
        </div>
        <button class="card-button-secondary" @click="sellBatch">Sell a Batch</button>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    sendBatch() {
      this.$router.push('send-batch');
    },
    sellBatch() {
      this.$router.push('sell-batch');
    },
    orderFeeds() {
      this.$router.push('order-feeds');
    },
  },
};
</script>
