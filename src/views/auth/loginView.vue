<template>
    <div class="auth-view-container">
      <login-form />
    </div>
</template>
<script>
import loginForm from '@/views/forms/loginForm.vue';

export default {
  components: {
    loginForm,
  },
};
</script>
