<template>
  <div>
    <form>
      <input type="file" @change="readfile" />
    </form>
    <div>{{ data }}</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      data: []
    }
  },
  methods: {
    readfile: function(e) {
      const vm = this
      const file = e.target.files[0]
      const reader = new FileReader()

      reader.onload = function() {
        vm.data = reader.result
      }
      reader.readAsText( file )
    }
  }
}
</script>