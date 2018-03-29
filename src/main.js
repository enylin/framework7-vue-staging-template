import Vue from 'vue'
import App from './App'
import Framework7 from 'framework7/dist/framework7.esm.bundle.js'
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js'
import Routes from './routes'

import './css/icons.css'

Vue.use(Framework7Vue, Framework7)

Vue.config.productionTip = false
Vue.config.silent = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging'
// Vue.config.devtools = !process.env.NODE_ENV === 'production'

window.onbeforeunload = function (e) {
  return ''
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  framework7: {
    id: 'io.framework7.testapp',
    name: 'Framework7',
    theme: process.env.THEME,
    routes: Routes
  }
})
