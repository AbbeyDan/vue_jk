// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import "../static/icon/iconfont.css"
// 引入reset.css
import "../static/css/reset.css"
Vue.use(ElementUI)
// 阻止启动生产消息
Vue.config.productionTip = false

// 初始化
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
