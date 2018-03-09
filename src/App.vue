<template>
  <div id="app">
    <router-link :to="{path: '/Login'}">Войти</router-link>
    <div id="vk_auth"></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
</style>
