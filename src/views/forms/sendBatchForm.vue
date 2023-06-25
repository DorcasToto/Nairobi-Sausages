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
          <select id="breed" name="breed" class="form-control">
            <option value="breed1">Large White</option>
            <option value="breed2">Large Black</option>
          </select><br>
          <label for="age">Age (months):</label><br>
          <input type="number" id="age" name="age" class="form-control" placeholder="Enter Age"><br>
          <label for="weight">Weight (kg)</label><br>
          <input type="number" id="weight" name="weight" class="form-control" placeholder="Enter Average weight"><br>
          <label for="weight">Description</label><br>
          <input type="number" id="age" name="age" class="form-control" placeholder="Enter Description"><br>
          <br>
          <input type="submit" value="Upload details" class="auth-button ">
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {};
</script>
