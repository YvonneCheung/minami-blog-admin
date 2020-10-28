import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import Pagination from './components/Pagination'
//css styles
import "element-ui/lib/theme-chalk/index.css";
import './assets/styles/index.sass'

Vue.use(ElementUI);

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
