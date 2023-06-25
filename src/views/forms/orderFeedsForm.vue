<!-- eslint-disable no-console -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div>
    <p @click="$router.back()" class="batch-header-back-title">Back</p>
    <p class="batch-header-title">Order feeds</p>
    <div class="batch-form-container">
      <img src="../../assets/pigs2.jpg" alt="test" class="batch-image">
      <div class="auth-card">
        <form>
          <label for="feed-type">Feed Type:</label><br>
          <select id="breed" name="breed" class="form-control" v-model="feedType" required>
            <option value="Energy Feed">Energy Feed</option>
            <option value="Protein Feed">Protein Feed</option>
          </select><br>
          <label for="age">Age (months):</label><br>
          <input type="number" id="age" name="age" class="form-control" placeholder="Enter Age" v-model="age" required><br>
          <label for="weight">Weight (kg)</label><br>
          <input type="number" id="weight" name="weight" class="form-control"
                 placeholder="Enter Average weight" @change="calculatePrice" v-model="weight" required><br>
          <label for="delivery-address">Delivery Address:</label><br>
          <textarea id="delivery-address" name="delivery-address" placeholder="Enter Delivery Address" class="form-control" v-model="address" required></textarea><br>
          <div id="price-display">
            <label for="price">Price:</label>
            <span id="price">{{ this.price }}</span>
          </div><br>
          <button type="submit" value="Upload details" class="auth-button" @click.prevent="orderFeeds">Order Feeds</button>
          <div v-if="showNotification" :class="`notification-${notificationType}`">{{ notificationMessage }}</div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import notificationMixin from '@/mixins/notifications';
import { mapMutations, mapGetters } from 'vuex';

export default {
  mixins: [notificationMixin],
  data() {
    return {
      feedType: '',
      weight: 0,
      age: 0,
      address: 0,
      price: 0,
    };
  },
  computed: {
    ...mapGetters(['getOrderedFeeds']),
  },
  methods: {
    ...mapMutations(['setOrderedFeeds']),
    calculatePrice() {
      const { age, weight } = this;
      this.price = age * weight * 10;
    },
    orderFeeds() {
      if (!this.feedType || !this.age || !this.weight || !this.address) {
        this.showErrorNotification('Please fill in all fields');
        return;
      }
      const orderedFeed = {
        feedType: this.feedType,
        weight: this.weight,
        age: this.age,
        address: this.address,
        price: this.price,
      };
      this.setOrderedFeeds([...this.getOrderedFeeds, orderedFeed]);
      this.showSuccessNotification('Feeds ordered successfully');
      setTimeout(() => {
        this.$router.push('/ordered-feeds');
      }, 1000);
    },
  },

};
</script>
