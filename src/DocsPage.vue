<template>
  <div class="col-md-8 m-md-0 mt-2" v-if="$root.auth.status == 'connected'">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-center">Документы</h5>
        <input type="text" class="form-control mt-4" v-model="textSearch" placeholder="Поиск">
      </div>
      <div class="list-group list-group-flush">
        <template v-for="doc in docsSearch">
          <div 
            :key="`doc-${doc.id}`" class="list-group-item flex-column align-items-start" 
            :class="{'select-doc': idShow == doc.id, 'list-group-item-action': !(idShow == doc.id), 'success-doc': isSuccess && idShow == doc.id, 'error-doc': isError && idShow == doc.id}" 
            @click="show(doc)"
          >
            <div class="d-flex w-100 justify-content-between mb-2">
              <a class="mb-1 text-truncate link-file" :href="doc.url">{{doc.title}}</a>
              <small class="date">{{doc.date | date}}</small>
            </div>
            <template v-if="doc.id == idShow">
              <div class="form-group row">
                <label class="col-sm-4 col-form-label">Наименование</label>
                <div class="col-sm-8">
                  <input type="text" v-model="docSelect.title" class="form-control" />
                </div>
              </div>
              <div class="row my-2">
                <div class="col"><button @click="deleteFile">Удалить</button></div>
                <div class="col text-right"><button @click="update">Изменить</button></div>
              </div>
            </template>
            <small>Файл {{doc.ext}}</small>
            <small class="float-right">размер {{doc.size | size}}</small>
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
      sortField: "date",
      order: "min",
      idShow: null,
      select: { title: "", tags: "", doc: {} },
      textSearch: '',
      isSuccess: false,
      isError: false,
    };
  },
  computed: {
    docsSearch() {
      if (this.textSearch == '') return this.docs;
      return this.docs.filter( doc => doc.title.toLowerCase().indexOf(this.textSearch.toLowerCase()) != -1 )
    }
  },
  mounted() {},
  methods: {
    show(doc) {
      this.idShow = doc.id;
      this.docSelect = doc;
    },
    sort(field = "date") {
      if (this.sortField == field)
        this.order = this.order == "min" ? "max" : "min";
      let order = this.order;
      this.sortField = field;
      this.docs.sort(function(d1, d2) {
        let n = order == "min" ? 1 : -1;
        if (field == "date") return d1.date * 1 > d2.date * 1 ? n : -n;
        if (field == "title") return d1.title > d2.title ? n : -n;
        if (field == "size") return d1.size * 1 > d2.size * 1 ? n : -n;
      });
    },
    update() {
      let data = this.$data
      VK.Api.call("docs.edit", {
        owner_id: this.$root.auth.session.user.id,
        doc_id: this.idShow,
        title: this.docSelect.title,
        tags: this.docSelect.tags,
        v: 5.73
      }, function (r) {
        console.log(r);
        if (r.response == 1) data.isSuccess = true;
        else data.isError = true;
        setTimeout(function() { data.isSuccess = false; data.isError = false; }, 1000)
      });
    },
    deleteFile() {
      let data = this.$data
      VK.Api.call("docs.delete", {
        owner_id: this.$root.auth.session.user.id,
        doc_id: this.idShow,
        v: 5.73
      }, function (r) {
        console.log(r);
        if (r.response == 1) { data.isSuccess = true; 
          let indexDoc = data.docs.reduce( (result, d, index) => d.id == data.idShow ? index : result, null )
          data.docs.splice(indexDoc, 1)
        }
        else data.isError = true;
        setTimeout(function() { data.isSuccess = false; data.isError = false; }, 1000)
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$color-border: rgb(224, 209, 209);
$sort-title: $color-border;
$background-select: rgb(236, 228, 228);

.link-file:link,
.link-file:visited {
  color: rgb(109, 37, 37);
  text-decoration: underline;
}

.sort-title {
  background: $sort-title;
}

.select-doc {
  background: $background-select;
  transition: all .2s;
}

.success-doc {
  background: rgb(190, 228, 204);
}
.error-doc {
  background: rgb(219, 165, 165);
}

.list-group-item-action {
  cursor: pointer;
}

</style>