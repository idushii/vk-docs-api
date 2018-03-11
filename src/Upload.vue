<template>
  <div class="col-md-8 m-md-0 mt-2">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-center mb-4">Загрузка</h5>
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="customFile" @change="upload">
          <label class="custom-file-label" for="customFile">Choose file</label>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Upload",
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {
    upload(e) {
      window.r = e.target.files;
      console.log(e.target);
      new Promise((resolve, reject) => { VK.Api.call( "docs.getUploadServer", { v: 5.73 }, function(r) { resolve(r) }); })
        .then(r => {
            var formData  = new FormData();

            formData.append(`file`, e.target.files[0]);

            console.log(formData)
            console.log({url: r.response.upload_url})
            return fetch(r.response.upload_url, {
              method: 'POST',
              body: formData,
              mode: 'no-cors',
              headers:{'Access-Control-Allow-Origin':'*'}
            })
          }).then(r => {
            console.log(r)
            //VK.Api.call( "docs.save", { v: 5.73 }, function(r) { resolve(r) });
          })
      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>