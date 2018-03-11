<template>
  <div id="app" class="col-md-8 m-md-0 mt-2">
    <div class="card">
      <notes_last></notes_last>
    </div>
    <div class="card" v-if="$root.isLogin">
      <docs>
        <a slot="beforeDocs" class="list-group-item">
          <h5 class="text-center">Последние документы</h5>
        </a>
        <router-link slot="afterDocs" class="list-group-item list-group-item-action" :to="{name: 'DocsPage'}">
          <h5 class="text-center">Все документы</h5>
        </router-link>
      </docs>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
    };
  },
  computed: {},
  methods: {},
  components: {
  }
};
</script>

<style lang="scss">

button {
  cursor: pointer;
}

</style>
