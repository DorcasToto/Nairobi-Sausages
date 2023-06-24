<!-- eslint-disable max-len -->
<template>
  <div>
    <side-nav />
    <div class="main-content">
      <top-bar />
      <dashboard-top-content />
      <post-list />
    </div>
  </div>
</template>
<script>
import dashboardTopContent from './dashboardTopContent.vue';
import sideNav from './sideNav.vue';
import topBar from './topBar.vue';
import postList from '../../views/posts/postList.vue';

export default {
  components: {
    dashboardTopContent,
    sideNav,
    topBar,
    postList,
  },
};
</script>
