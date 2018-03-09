<template>
  <div class="col-md-8 m-md-0 mt-2">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Документы</h5>
      </div>
        <div class="row m-0">
          <div class="col-7 border-bottom border-top p-2 text-center"><b>Название</b></div>
          <div class="col border-bottom border-top p-2 text-center"><b>Дата</b></div>
          <div class="col border-bottom border-top p-2 text-center"><b>Размер</b></div>
          <div class="col border-bottom border-top p-2 text-center"><b></b></div>
          <template  v-for="doc in docs">
            <div class="col-7 border-bottom border-top p-2 pl-4" :key="`doc1-${doc.id}`"><a :href="doc.url">{{doc.title}}</a></div>
            <div class="col border-bottom border-top p-2 text-truncate" :key="`doc2-${doc.id}`">{{doc.date | date}}</div>
            <div class="col border-bottom border-top p-2 text-center" :key="`doc3-${doc.id}`">{{doc.size | size}}</div>
            <div class="col border-bottom border-top p-2 text-center" :key="`doc4-${doc.id}`">
              <button class="mb-1 mb-md-0">✐</button>
              <button>✖</button>
            </div>
          </template>
        </div>
    </div>
  </div>
</template>

<script>
import docs_mixin from "./docs-mixin";
export default {
  mixins: [docs_mixin],
  name: "DocsPage",
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a:link, a:visited {
    color: rgb(51, 45, 45);
  }
</style>