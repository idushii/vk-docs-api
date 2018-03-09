<template>
  <div class="col-md-8 m-md-0 mt-2">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Документы</h5>
      </div>
        <div class="row m-0">
          <div class="col-7 caption-table" :class="{'sort-title': sortField == 'title'}" @click="sort('title')"><b>Название</b></div>
          <div class="col caption-table d-none d-md-block" :class="{'sort-title': sortField == 'date'}" @click="sort('date')"><b>Дата</b></div>
          <div class="col caption-table  d-none d-md-block" :class="{'sort-title': sortField == 'size'}" @click="sort('size')"><b>Размер</b></div>
          <div class="col caption-table"><b></b></div>
          <template  v-for="doc in docs">
            <div class="col-7 border-bottom border-top p-2 pl-4" :key="`doc1-${doc.id}`"><a :href="doc.url">
              {{doc.title}} {{doc.tags}}
            </a></div>
            <div class="col border-bottom border-top p-2 text-truncate  d-none d-md-block" :key="`doc2-${doc.id}`">{{doc.date | date}}</div>
            <div class="col border-bottom border-top p-2 text-center  d-none d-md-block" :key="`doc3-${doc.id}`">{{doc.size | size}}</div>
            <div class="col border-bottom border-top p-2 text-right" :key="`doc4-${doc.id}`">
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
    return {
      sortField: 'date',
      order: 'min'
    };
  },
  computed: {},
  mounted() {},
  methods: {
    sort(field = 'date') {
      if (this.sortField == field) this.order = this.order == 'min' ? 'max' : 'min';
      let order = this.order;
      this.sortField = field
      this.docs.sort(function(d1, d2) {
        let n = order == 'min' ? 1 : -1
        if (field == 'date') return d1.date*1 > d2.date*1 ? n : -n;
        if (field == 'title') return d1.title > d2.title ? n : -n;
        if (field == 'size') return d1.size*1 > d2.size*1 ? n : -n;
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $color-border:  rgb(224, 209, 209);
  $sort-title: $color-border;

  a:link, a:visited {
    color: rgb(51, 45, 45);
  }

  .sort-title {
    background: $sort-title;
  }
  .caption-table {
    border-top: 1px solid $color-border;
    border-bottom: 1px solid $color-border;
    padding: .5rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s;
  }
</style>