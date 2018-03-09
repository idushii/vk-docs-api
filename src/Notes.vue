<template>
  <div id="notes">
    <button @click="loadNotes">Получить заметки</button>
  </div>
</template>

<script>
export default {
  name: "Notes",
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    loadNotes() {
      console.log("loadNotes");
      VK.Api.call("notes.get", { v: 5.73 }, function(r) {
        console.log(r);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>