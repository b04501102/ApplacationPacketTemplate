import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faCodepen, faJsSquare, faPython,  } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap'

library.add(faPhone, faEnvelope, faSun, faMoon , faLinkedin, faCodepen)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
