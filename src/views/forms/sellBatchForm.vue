<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable max-len -->
<template>
    <div>
        <p @click="$router.back()" class="batch-header-back-title">Back</p>
        <p class="batch-header-title">Submit Batch</p>
        <div class="batch-form-container">
            <img src="../../assets/pigs2.jpg" alt="test" class="batch-image">
            <div class="auth-card">
                <form>
                    <div class="slider-container">
                        <input type="range" min="0" max="36" :value="sliderValue" class="slider" id="mySlider">
                        <p>Value: <span id="sliderValue">36</span></p>
                    </div>
                    <label for="breed">Breed:</label><br>
                    <select id="breed" name="breed" class="form-control" v-model="breed">
                        <option value="Large White">Large White</option>
                        <option value="Duroc Pig">Duroc Pig</option>
                    </select><br>
                    <label for="age">Age (months):</label><br>
                    <input type="number" id="age" name="age" class="form-control" placeholder="Enter Age" v-model="age"><br>
                    <label for="weight">Weight (kg)</label><br>
                    <input type="number" id="weight" name="weight" class="form-control" placeholder="Enter Average weight"
                        v-model="weight" @change="calculatePrice"><br>
                    <label for="weight">Price(KES)</label><br>
                    <input type="number" id="price" name="price" class="form-control" placeholder="Enter price per pig"
                        :value=price disabled=""><br>
                    <br>
                    <button type="submit" value="Upload details" class="auth-button " @click="sellBatch">Submit Request</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      breed: '',
      weight: 0,
      age: 0,
      price: 0,
      description: 0,
      sliderValue: 36,
    };
  },
  mounted() {
    const slider = document.getElementById('mySlider');
    const sliderValue = document.getElementById('sliderValue');
    sliderValue.textContent = this.sliderValue;

    slider.addEventListener('input', () => {
      this.sliderValue = parseInt(slider.value, 10);
      sliderValue.textContent = this.sliderValue;
    });
  },
  methods: {
    ...mapMutations(['sellBatches']),
    sellBatch() {
      const { sliderValue, breed } = this;
      const count = sliderValue;
      this.sellBatches({ breed, count });
      this.$router.push('/dashboard');
    },
    calculatePrice() {
      const { age, weight } = this;
      this.price = age * weight * 10;
    },
  },
};
</script>
