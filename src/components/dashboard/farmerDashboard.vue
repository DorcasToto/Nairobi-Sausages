<!-- eslint-disable max-len -->
<template>
  <div>
    <side-nav />
    <layout-bar>
      <dashboard-top-content />
      <post-list />
    </layout-bar>
  </div>
</template>
<script>
import dashboardTopContent from './dashboardTopContent.vue';
import sideNav from './sideNav.vue';
import postList from '../../views/posts/postList.vue';
import layoutBar from './layoutBar.vue';

export default {
  components: {
    dashboardTopContent,
    sideNav,
    postList,
    layoutBar,
  },
};
</script>
