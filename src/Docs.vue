<template>
  <div id="docs" class="card">
    <div class="list-group list-group-flush">
      <a 
        v-for="doc in last" :key="`doc-${doc.id}`"
        :href="doc.url" 
        class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{doc.title}}</h5>
          <small>{{doc.date | date}}</small>
        </div>
        <small>Файл {{doc.ext}}</small>
        <small class="float-right">размер {{doc.size | size}}</small>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Docs",
  data() {
    return {
      docs: [],
      count: 0
    };
  },
  computed: {
    last() {
      return this.docs.slice(0, 10);
    }
  },
  created() {
    this.loadDocs();
  },
  methods: {
    loadDocs() {
      let data = this.$data;
      VK.Api.call("docs.get", { v: 5.73 }, function(r) {
        console.log(r);
        data.docs = r.response.items;
        data.count = r.response.count;
      });
    }
  },
  filters: {
    date(value) {
      return moment(new Date(value * 1000)).fromNow();
    },
    size(value) {
      let kb = Math.round(value / 1024)
      if (kb > 1024) {
        let mb = Math.round(kb / 1024)
        return `${mb} мб`
      } else {
        return `${kb} кб`
      }
      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>