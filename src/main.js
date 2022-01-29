import { createApp } from 'vue'
//import { createApp, VueElement } from 'vue'//
import App from './App.vue'
import ReadText from './components/ReadText.vue'
import ReadJson from './components/ReadJson.vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'

// Vue.use(VueAxios, axios)

createApp(App)
    .component("ReadText",ReadText)
    .component("ReadJson",ReadJson)
    .mount('#app')
