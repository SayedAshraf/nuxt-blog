<template>
  <header class="AppHeader">
    <nav class="NavBar">
      <ul>
        <li class="nav-item">
          <nuxt-link to="/blog">Blog</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style lang="scss">
.AppHeader {
  background-color: #000;
  padding: 15px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  .NavBar {
    ul {
      margin: 0;
      padding: 0;
      .nav-item {
        font-size: 39px;
        color: #fff;
        list-style: none;
        a,
        &:active {
          color: inherit;
          text-decoration: none;
          padding: 5px 10px;
          border-radius: 5px;
        }
        a.nuxt-link-exact-active {
          background-color: #fff;
          color: #333;
        }
      }
    }
  }
}
</style>
