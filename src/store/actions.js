import postData from '../posts.json';

export default {
  fetchPosts({ commit }) {
    console.log('22', postData);
    commit('setPosts', postData);
  },
};
