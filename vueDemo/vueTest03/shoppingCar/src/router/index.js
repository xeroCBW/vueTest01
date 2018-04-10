import Vue from 'vue'
//遇到安装不成功,使用使用管理员权限来运行
import Router from 'vue-router'
//导入模块
import goods from '@/components/goods/goods';
import ratings from '@/components/ratings/ratings';
import seller from '@/components/seller/seller';
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const routes = [{
  path: '/',
  redirect: '/goods'
}, {
  path: '/goods',
  component: goods
}, {
  path: '/ratings',
  component: ratings
}, {
  path: '/seller',
  component: seller
}];

export default new Router({
  linkActiveClass: 'active',
  routes
});

