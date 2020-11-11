<template>
  <div>
    <div class="posts">
      <div class="post-card" v-for="post in $store.state.posts" :key="post.id">
        <div class="post-card-body">
          <h3>
            <nuxt-link :to="`/blog/${post.id}`">
              <span @click="UpdateSelectedPost(post)">
                {{ post.title }}
              </span>
            </nuxt-link>
          </h3>
          <p>{{ post.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'say-hello',
  fetch({ $axios, store }) {
    return $axios.$get('/posts').then((res) => {
      store.commit('updatePosts', res)
    })
  },
  methods: {
    UpdateSelectedPost(post) {
      this.$store.commit('updateSelectedPost', post)
    },
  },
}
</script>


