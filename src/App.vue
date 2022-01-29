<template>
  <div>
    <ReadText @sendText="getTextData"></ReadText>
    <ReadJson @sendJson="getJsonData"></ReadJson>
    <p>子コンポーネントから取得した値：{{ textData }}</p>
    <p>子コンポーネントから取得した値：{{ jsonData }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      textData: [],
      jsonData: []
    }
  },
  methods: {
    getTextData: function (value) {
      this.textData = value;
    },
    getJsonData: function (value) {
      this.jsonData = value;
    }
  }
}
</script>

<style scoped>
</style>