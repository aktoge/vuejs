<template>
  <div>
    <!-- <form>
      <input type="file" @change="readfile" />
    </form> -->
    <div id="upload" class="commonStyle" :class="{'stylePre':stylePre, 'styleDrag':styleDrag , 'stylePost':stylePost}"
        @dragover.prevent="changeStyle($event,'ok')"
        @dragleave.prevent="changeStyle($event,'no')"
        @drop.prevent="uploadFile($event)">

        <form for="inputFileByDrop" class="button"></form>
        <input id="inputFileByDrop" type="file" @change="uploadFile($event)">
        <p>またはここにファイルをドラッグ＆ドロップ</p>

    </div>

    <div>DATA:{{ textData }}</div>
    <div>Prop:{{ fileName }}</div>

    <button class="btn btn-success" @click="scrSample">アップロード</button>

  </div>
</template>

<script>
export default {
  data(){
    return {
      textData: [] ,
      fileName: 'none',
      stylePre: true,
      styleDrag: false,
      stylePost: false
    }
  },
  methods: {
    // readfile: function(e) {
    //   const vm = this
    //   const file = e.target.files[0]
    //   const reader = new FileReader()

    //   reader.onload = function() {
    //     vm.textData = reader.result
    //   }
    //   reader.readAsText( file )
    // },
    uploadFile: function(event){
      // console.log(event)
      this.stylePre = false
      this.styleDrag = false
      this.stylePost = true
      const vm = this
      const fileList = event.target.files ? event.target.files : event.dataTransfer.files
      const file = fileList[0]
      const reader = new FileReader()
      reader.onload = function() {
        vm.textData = reader.result
      }
      reader.readAsText( file )
      this.fileName = file.name
    },
    changeStyle: function(event,flag){
      if(flag=='ok'){
        this.styleDrag = true
      }else{
        this.styleDrag = false
      }
    },
    scrSample: function() {
      this.textData = this.textData.toUpperCase() ;
    },
  }
}
</script>

<style scoped>
.commonStyle { text-align:center; width:400px;}
.stylePre {border:3px dotted red;}
.stylePost {border:3px dotted blue;}
.styleDrag {border:3px dotted green;}

.btn.btn-success {
        width:380px;
        margin:10px;
        background-position:center;
}

#inputFileByDrop {
    display:block;
    margin-left:40px;
}
</style>