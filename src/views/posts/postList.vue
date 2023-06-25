<!-- eslint-disable max-len -->
<template>
  <div>
    <p>Latest Posts</p>
    <div class="card-left" v-for="(post, index) in getPosts" :key="index">
      <img class="card-left-image" src="../../assets/img1.webp" alt="Post Image">
      <div class="card-left-description">
        <p>{{ post.title }}</p>
        <p>{{ post.description}}</p>
        <div class="card-left-tags">
            <span v-for="(tag, index) in post.tags" :key="index">{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getPosts']),
  },
  mounted() {
    console.log('here');
    this.fetchPosts();
  },
  methods: {
    ...mapActions(['fetchPosts']),
  },
};
</script>
