<template>
  <div class="col-12 col-md-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Авторизация</h5>
        <template v-if="!$root.isLogin">
          <p class="card-text">Привет, Аноним</p>
          <button class="float-right" @click="login">Войти</button>
        </template>
        <template v-if="$root.isLogin">
          <p class="card-text">Вы вошли как
            <b>{{user.first_name}} {{user.last_name}}</b>
          </p>
          <button class="float-right" @click="logout">Выход</button>
        </template>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Auth",
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$root.auth.status == "connected"
        ? this.$root.auth.session.user
        : {};
    }
  },
  mounted() {},
  methods: {
    login() {
      VK.Auth.login(function(e) {
        window.DataApp.auth = e;
      }, 131072 + 2048 + 1); //*/
    },
    logout() {
      VK.Auth.logout(function(e) {
        window.DataApp.auth.status = "";
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>