import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import 'bulma/css/bulma.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee, faGithub, faPlusSquare);

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')
