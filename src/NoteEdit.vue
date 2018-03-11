<template>
  <div class="col-md-8 m-md-0 mt-2">
    <div class="card">
      <div class="card-body">
        <div class="form-group">
          <input type="text" class="form-control" v-model="title" :readonly="!isEdit" />
        </div>
        <div class="form-group">
          <textarea class="form-control" v-model="text" :readonly="!isEdit" v-if="!isEdit"></textarea>
          <vue-ckeditor v-model="text" language="ru" v-if="isEdit" :toolbar="toolbar"></vue-ckeditor>
        </div>
        <a :href="view_url">Открыть</a>
        <button class="float-right" :disabled="!isEdit" @click="save">Сохранить</button>
      </div>
    </div>
  </div>
</template>

<script>
  import VueCkeditor from 'vueckeditor';

  export default {
    name: 'NoteEdit',
    data() {
      return {
        title: '',
        text: '',
        view_url: '',
        can_comment: '',
        toolbar: [
          ['Undo', 'Format'],
          ['Bold', 'Italic', 'Strike', 'Underline'],
          ['BulletedList', 'NumberedList'],
          ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
          ['FontSize'],
        ]
      }
    },
    computed: {
      isEdit() {
        return this.can_comment == 1
      }
    },
    mounted() {
      let data = this.$data;
      VK.Api.call( "notes.getById", { v: 5.73, note_id: this.$route.params.id }, function(r) {
        console.log(r)
        data.title = r.response.title;
        data.text = r.response.text;
        data.view_url = r.response.view_url;
        data.can_comment = r.response.can_comment;
      })
    },
    methods: {
      save() {
      VK.Api.call( "notes.edit", { v: 5.73, note_id: this.$route.params.id, title: this.title, text: this.text }, function(r) {
        console.log(r)
      })
      }
    },
    components: {
      VueCkeditor
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  textarea {
    min-height: 200px;
  }
</style>