export default {
  data() {
    return {
      docs: [],
      count: 0
    };
  },
  methods: {
    loadDocs() {
      let data = this.$data;
      VK.Api.call("docs.get", {
        v: 5.73
      }, function (r) {
        console.log(r);
        data.docs = r.response.items;
        data.count = r.response.count;
      });
    },
  },
  filters: {
    date(value) {
      return moment(new Date(value * 1000)).fromNow();
    },
    size(value) {
      let kb = Math.round(value / 1024);
      if (kb > 1024) {
        let mb = Math.round(kb / 1024);
        return `${mb} мб`;
      } else {
        return `${kb} кб`;
      }
    }
  },
  mounted() {
    this.loadDocs()
  }
}