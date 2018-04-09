// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import router from './router/index.js';
//./表明是当前目录,即src目录
//刚才不能导入的原因是没有加stylus依赖的原因
import './common/stylus/index.styl';

Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({

  //el是一个挂载点,这样可以实现在app中的body进行展示
  el: '#app',
  router,
  render: h => h(App)
});
