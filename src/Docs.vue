<template>
  <div id="docs" v-if="$root.auth.status == 'connected'" :class="{'list-group list-group-flush': typeList == 'list'}">
    <slot name="beforeDocs"></slot>
    <slot :docs="docs" :last="last">
      <template v-for="doc in last">
        <a :key="`doc-${doc.id}`" :href="doc.url" class="list-group-item list-group-item-action flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1 text-truncate">{{doc.title}}</h5>
            <small class="date">{{doc.date | date}}</small>
          </div>
          <small>Файл {{doc.ext}}</small>
          <small class="float-right">размер {{doc.size | size}}</small>
        </a>
      </template>
    </slot>
    <slot name="afterDocs"></slot>
  </div>
</template>

<script>
export default {
  name: "Docs",
  props: {
    typeList: { default: 'list' }
  },
  data() {
    return {
      docs: [],
      count: 0
    }
  },
  computed: {
    last() {
      return this.docs ? this.docs.slice(0, 5) : [];
    }
  },
  created() {
  },
  mounted() {
    this.loadDocs()
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .date { min-width: 100px; text-align: right; }
</style>