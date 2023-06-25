<template>
  <div class="auth-view-container">
    <signup-form />
  </div>
</template>
<script>
import { mapState } from 'vuex';
import signupForm from '@/views/forms/signupForm.vue';

export default {
  components: {
    signupForm,
  },
  computed: {
    ...mapState(['count']),
  },
};
</script>
