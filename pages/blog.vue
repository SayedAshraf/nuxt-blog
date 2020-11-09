<template>
  <div>
    <h1>Blog Wrapper</h1>
    <div class="posts">
      <div class="post-card" v-for="post in $store.state.posts" :key="post.id">
        <div class="post-card-body">
          <h1>{{ post.id }}</h1>
          <h1>{{ post.title }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    }
  },
  fetch({ $axios, store }) {
    return $axios
      .$get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        store.commit('updatePosts', res)
      })
  },
}
</script>


