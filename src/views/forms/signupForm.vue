<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
    <div class="auth-card">
     <header-text />
      <form>
        <label for="fname">Enter your username</label><br>
        <input type="text" id="username" name="username"
               class="form-control" placeholder="Enter username"><br>
        <label for="fname">Enter your email address</label><br>
        <input type="email" id="email" name="email"
               class="form-control" placeholder="Enter Email address"><br>
        <label for="password">Enter your Password</label><br>
        <input type="password" id="password" name="password"
               class="form-control" placeholder="Enter password"><br><br>
        <input type="submit" value="Signup" class="auth-button ">
      </form>
      <p>Have an account? <router-link to="/">Login</router-link></p>
    </div>
</template>
<script>
import headerText from '../auth/headerText.vue';

export default {
  components: { headerText },
};
</script>
