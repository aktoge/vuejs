<template>
  <div>
    <div id="tabBox">
      <div id="tabs">
        <!-- Topのタブ -->
        <input type="radio" value="Input" id="tabInput" v-model="isTabActive">
        <label for="tabInput">Input</label>
        <input type="radio" value="Option" id="tabOption" v-model="isTabActive">
        <label for="tabOption">Option</label>
        <input type="radio" value="Output" id="tabOutput" v-model="isTabActive">
        <label for="tabOutput">Output</label>
      </div>
      <ul id="contents">
        <div v-if="isTabActive == 'Input'">
              <keep-alive>
                <ReadText @sendText="getTextData"></ReadText>
              </keep-alive>
              <keep-alive>
                <ReadJson v-if="jsonSel == 'LocalJson'" @sendJson="getJsonData"></ReadJson>
                <div v-else id="blank_div"></div>
              </keep-alive>
                <input type="radio" value="LocalJson" id="LocalJson" v-model="jsonSel">
                <label for="false">Local</label>
                <input type="radio" value="sel1" id="sel1" v-model="jsonSel">
                <label for="sel1">sel1</label>
                <input type="radio" value="sel2" id="sel2" v-model="jsonSel">
                <label for="sel2">sel2</label>
              <p>子コンポーネントから取得した値：{{ textData }}</p>
              <p>子コンポーネントから取得した値：{{ jsonData }}</p>
        </div>
        <li v-else-if="isTabActive == 'Option'">
          <div id="optionTabs">
            <input type="radio" value="sel1" id="sel1" v-model="isOptionTabsActive">
            <label for="sel1">sel1</label>
            <input type="radio" value="sel2" id="sel2" v-model="isOptionTabsActive">
            <label for="sel2">sel2</label>
            <input type="radio" value="sel3" id="sel3" v-model="isOptionTabsActive">
            <label for="sel3">sel3</label>
          </div>
        </li>
        <li v-else-if="isTabActive == 'Output'">
            <h1>テスト2</h1>
        </li>
      </ul>
    </div>


  </div>
</template>

<script>
export default {
  data () {
    return {
      textData: [],
      jsonData: [],
      isTabActive: "Input",
      jsonSel: "LocalJson" ,
      isOptionTabsActive: "sel2"
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

#tabs input {
  display: none;
}

#tabs label {
    display: inline-block;
    line-height: 40px;
    width: 120px;
    text-align: center;
    cursor: pointer;
    background: #eee;
    transition: 0.3s ease-in-out;
    border-radius: 10px 10px 0 0;
}

#tabs input:checked + label {
    background: #56B4BE;
    color: #fff;
}

#contents {
    margin: 0;
    padding: 10px 10px;
    border-top: 2px solid #56B4BE;
}

#blank_div {
    margin: 182px;
    /* line-height: 40px; */
    width: 400px;
}
</style>