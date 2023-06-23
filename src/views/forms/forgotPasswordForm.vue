<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
    <div class="auth-card">
      <header-text />
      <form>
        <label for="email">Enter your email address</label><br>
        <input type="text" id="email" name="email"
               class="form-control" placeholder="Enter email address "><br>
        <input type="submit" value="Send password reset link" class="auth-button ">
      </form>
    </div>
</template>
<script>
import headerText from '../auth/headerText.vue';

export default {
  components: { headerText },
};
</script>
