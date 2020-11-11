<template>
  <footer class="AppFooter">
    <h1>Copyright &copy; 2020</h1>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style lang="scss" scoped>
.AppFooter {
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  h1 {
    font-size: 20px;
    color: #fff;
  }
}
</style>
