<template>
  <div>NoteNew</div>
</template>

<script>
  export default {
    name: 'NoteNew',
    data() {
      return {}
    },
    computed: {},
    mounted() {
      VK.Api.call( "notes.add", { v: 5.73, title: 'new', text: 'новая заметка' }, function(r) {
        console.log(r)
      })
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>