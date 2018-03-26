// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
//引入elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//C:\Users\86175\Desktop\vueDemo\vueTest01\vueTest01\node_modules\element-ui\lib\
Vue.use(ElementUI)


//导入navi
import Navi from './components/Navi/Navi.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

new Vue({
  router,
  el: '#app',
  render: h => h(Navi)
})
