// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routeConfig from './router-config'  // 引入router-config.js文件

import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element)


//加载路由中间件
Vue.use(VueRouter)

Vue.config.productionTip = false


//定义路由
const router = new VueRouter({
  routes: routeConfig
})

new Vue({
  router,//设置router
  // store,
  el: "#app",
  render: h => h(App)
})
