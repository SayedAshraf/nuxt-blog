<template>
  <div class="post-card">
    <h1 class="post-title">{{ $store.state.selectedPost.title }}</h1>
    <p class="post-body">{{ $store.state.selectedPost.body }}</p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.$store.state.selectedPost.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$store.state.selectedPost.body,
        },
      ],
    }
  },
  validate({ params }) {
    return !isNaN(params.id)
  },
  fetch({ $axios, store, params }) {
    if (store.state.selectedPost && store.state.selectedPost.id == params.id)
      return true
    return $axios.$get(`/posts/${params.id}`).then((res) => {
      store.commit('updateSelectedPost', res)
    })
  },
}
</script>

<style lang="scss" scoped>
.post-card {
  padding: 10px 150px;
  .post-title {
    font-size: 50px;
    padding: 15px 10px;
  }
  .post-body {
    border: 2px solid #ddd;
    font-size: 30px;
  }
}
</style>
