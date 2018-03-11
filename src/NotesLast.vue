<template>
  <div class="list-group list-group-flush">
    <router-link 
      v-for="note in notes" 
      :key="`note-${note.id}`" 
      class="list-group-item list-group-item-action flex-column align-items-start"
      :to="{name: 'NoteEdit', params: {id: note.id}}"
    >
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1 text-truncate">{{note.title}}</h5>
        <small class="date">{{note.date | date}}</small>
      </div>
      <small>{{note.text}}</small>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'NotesLast',
    data() {
      return {
        notes: [],
        count: 0
      }
    },
    computed: {},
    mounted() {
      this.loadNotes()
      window.loadNotes = this.loadNotes
    },
    methods: {
      loadNotes() {
        console.log('loadNotes')
        let data = this.$data;
        VK.Api.call("notes.get", {
          v: 5.73
        }, function (r) {
          console.log(r);
          data.notes = r.response.items;
          data.count = r.response.count;
        });
      }
    },
    filters: {
      date(value) {
        return moment(new Date(value * 1000)).fromNow();
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>