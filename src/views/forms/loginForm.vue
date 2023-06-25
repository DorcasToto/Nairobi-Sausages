<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div>
    <div class="auth-card">
      <header-text />
      <form>
        <label for="fname">Enter your email address</label><br>
        <input type="email" id="email" name="email" class="form-control" placeholder="Enter Email address"><br>
        <label for="password">Enter your Password</label><br>
        <input type="password" id="password" name="password" class="form-control" placeholder="Enter password"><br><br>
        <input type="submit" value="Login" class="auth-button" @click="$router.push('/')">
      </form>
      <p>Do not have an account? <router-link to="/signup">Register</router-link></p>
      <router-link to="/forgot-password">Forgot password</router-link>
    </div>
  </div>
</template>

<script>
import headerText from '../auth/headerText.vue';

export default {
  components: { headerText },
};
</script>
