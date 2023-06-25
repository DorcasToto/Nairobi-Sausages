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
          <select id="breed" name="breed" class="form-control">
            <option value="breed1">Energy feed</option>
            <option value="breed2">Pr</option>
          </select><br>
          <label for="age">Age (months):</label><br>
          <input type="number" id="age" name="age" class="form-control" placeholder="Enter Age"><br>
          <label for="weight">Weight (kg)</label><br>
          <input type="number" id="weight" name="weight" class="form-control"
                 placeholder="Enter Average weight"><br>
          <label for="weight">Quantity</label><br>
          <input type="number" id="price" name="price" class="form-control" placeholder="Enter Quantity"><br>
          <label for="delivery-address">Delivery Address:</label><br>
          <textarea id="delivery-address" name="delivery-address" placeholder="Enter Delivery Address" class="form-control"></textarea><br>
          <div id="price-display">
            <label for="price">Price:</label>
            <span id="price">-</span>
          </div><br>
          <input type="submit" value="Upload details" class="auth-button ">
        </form>
      </div>
    </div>
  </div>
</template>
