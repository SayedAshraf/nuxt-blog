export default {
  state: () => ({
    posts: [],
  }),
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts
    },
  },
}
