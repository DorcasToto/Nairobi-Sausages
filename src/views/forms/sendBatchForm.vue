<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div>
    <p @click="$router.back()" class="batch-header-back-title">Back</p>
    <p class="batch-header-title">Submit Pig details</p>
    <div class="batch-form-container">
        <img src="../../assets/pigs2.jpg" alt="test" class="batch-image">
      <div class="auth-card">
        <form>
          <label for="breed">Breed:</label><br>
          <select id="breed" name="breed" class="form-control" v-model="breed">
            <option value="Large White">Large White</option>
            <option value="Duroc Pig">Duroc Pig</option>
          </select><br>
          <label for="age">Age (months):</label><br>
          <input type="number" id="age" name="age" class="form-control" placeholder="Enter Age" v-model="age" required><br>
          <label for="weight">Weight (kg)</label><br>
          <input type="number" id="weight" name="weight" class="form-control" placeholder="Enter Average weight" v-model="weight" required><br>
          <label for="weight">How many? </label><br>
          <input type="number" id="count" name="count" class="form-control" placeholder="How many to send" v-model="count" required><br>
          <label for="weight">Description</label><br>
          <input type="text" id="age" name="age" class="form-control" placeholder="Enter Description" v-model="description" required><br>
          <br>
          <button class="auth-button" @click.prevent="submitBatch">Upload details</button>
          <div v-if="showNotification" :class="`notification-${notificationType}`">{{ notificationMessage }}</div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import notificationMixin from '@/mixins/notifications';

export default {
  mixins: [notificationMixin],
  data() {
    return {
      breed: '',
      weight: 0,
      age: 0,
      count: 0,
      description: '',
    };
  },
  computed: {
    ...mapGetters(['getSentBatches']),
  },
  methods: {
    ...mapMutations(['incrementCount', 'setSentBatches']),
    submitBatch() {
      if (!this.breed || !this.age || !this.weight || !this.description || !this.count) {
        this.showErrorNotification('Please fill in all fields');
        return;
      }
      const sendBatch = {
        breed: this.breed,
        age: this.age,
        weight: this.weight,
        description: this.description,
        count: this.sliderValue,
      };
      const { breed, count } = this;
      this.incrementCount({ breed, count });
      this.setSentBatches([...this.getSentBatches, sendBatch]);
      this.showSuccessNotification('Pigs uploaded successfully');
      setTimeout(() => {
        this.$router.push('/sent-batches');
      }, 1000);
    },
  },
};
</script>
