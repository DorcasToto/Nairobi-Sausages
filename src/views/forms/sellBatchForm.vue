<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable max-len -->
<template>
    <div>
        <p class="batch-header-title">Submit Batch</p>
        <div class="batch-form-container">
            <img src="../../assets/pigs2.jpg" alt="test" class="batch-image">
            <div class="auth-card">
                <form>
                    <div class="slider-container">
                        <input type="range" min="0" max="36" value="50" class="slider" id="mySlider">
                        <p>Value: <span id="sliderValue">36</span></p>
                    </div>
                  <label for="breed">Breed:</label><br>
                  <select id="breed" name="breed" class="form-control">
                    <option value="breed1">Large White</option>
                    <option value="breed2">Large Black</option>
                  </select><br>
                    <label for="age">Age (months):</label><br>
                    <input type="number" id="age" name="age" class="form-control" placeholder="Enter Age"><br>
                    <label for="weight">Weight (kg)</label><br>
                    <input type="number" id="weight" name="weight" class="form-control"
                        placeholder="Enter Average weight"><br>
                    <label for="weight">Price(KES)</label><br>
                    <input type="number" id="price" name="price" class="form-control" placeholder="Enter price per pig"><br>
                    <br>
                    <input type="submit" value="Upload details" class="auth-button ">
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  mounted() {
    const slider = document.getElementById('mySlider');
    const sliderValue = document.getElementById('sliderValue');

    slider.addEventListener('input', function () {
      sliderValue.textContent = this.value;
    });
  },
};
</script>
