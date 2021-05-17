import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 1.引入 ElementUI 
import ElementUI from 'element-ui';
// 2.  引入 css
import 'element-ui/lib/theme-chalk/index.css';
// 3.使用 ElementUI 插件
Vue.use(ElementUI);
// 引入 axios
import axios from './shopaixos/shopaxios'
// 挂载到Vue的实例上面
Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
