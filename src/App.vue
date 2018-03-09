<template>
  <div id="app" class="container my-2">
    <div class="row">
      <div class="col-md-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Авторизация</h5>
            <template v-if="$root.auth.status != 'connected'">
              <p class="card-text">Привет, Аноним</p>
              <button class="float-right" @click="login">Войти</button>
            </template>
            <template v-if="$root.auth.status == 'connected'">
              <p class="card-text">Вы вошли как
                <b>{{user.first_name}} {{user.last_name}}</b>
              </p>
              <button class="float-right" @click="logout">Выход</button>
            </template>
          </div>
        </div>
      </div>
      <div class="col-md-8 m-md-0 mt-2">
        <div class="card" v-show="$root.isLogin">
          <docs>
            <a slot="beforeDocs" class="list-group-item"><h5 class="text-center">Последние документы</h5></a>
            <router-link slot="afterDocs" class="list-group-item list-group-item-action" :to="{path: './DocsList'}"><h5 class="text-center">Все документы</h5></router-link>
          </docs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import notes from "./notes";
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  computed: {
    user() {
      return this.$root.auth.status == "connected"
        ? this.$root.auth.session.user
        : {};
    },
    
  },
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
  },
  components: {
    notes,
  }
};
</script>

<style lang="scss">

</style>
