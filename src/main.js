import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@/utils/axios.js'
import ElementUI from "element-ui";
import Pagination from './components/Pagination'
import mavonEditor from 'mavon-editor'
import moment from 'moment'

//css styles
import "element-ui/lib/theme-chalk/index.css";
import './assets/styles/index.sass'
import 'mavon-editor/dist/css/index.css'
//use
Vue.use(ElementUI);
Vue.use(mavonEditor)

Vue.prototype.moment = moment
Vue.config.productionTip = false;
Vue.component('Pagination', Pagination)

new Vue({
  router,
  store,
  data: {
    bus: new Vue()
  },
  render: h => h(App)
}).$mount("#app");
