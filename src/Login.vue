<template>
  <div>
    Login
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {}
    },
    computed: {},
    mounted() {
      window.router = this.$router
      /*VK.Auth.login(function(e) {
        window.router.push({path: './'})
      }, 1)//*/
      VK.Widgets.Auth("vk_auth", {"authUrl":"/Login"});
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>