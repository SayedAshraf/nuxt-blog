<template>
  <div>
    <h1>{{ this.error.message }}</h1>
    <h1>{{ this.error.path }}</h1>
    <h1>{{ this.error.statusCode }}</h1>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error-layout',
  mounted() {
    console.log('sayed')
    console.log(this.error.message)
  },
}
</script>

