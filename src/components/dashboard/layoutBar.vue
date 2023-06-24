<template>
  <div>
    <side-nav />
    <div class="main-content">
      <top-bar />
      <slot></slot>
    </div>
  </div>
</template>
<script>
import sideNav from './sideNav.vue';
import topBar from './topBar.vue';

export default {
  components: {
    sideNav,
    topBar,
  },
};
</script>
