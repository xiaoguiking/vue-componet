import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import FastClick from "fastclick";
import vConsole from "@/assets/js/vconsole.js";

Vue.use(vConsole);
import "@/assets/css/border.css";
import "@/assets/css/reset.css";
// import "../src/assets/js/fastclick.js";
import "@/assets/js/common.js";

import "normalize.css/normalize.css";

FastClick.attach(document.body);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
