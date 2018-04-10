<template>
  <div>
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->

  <v-header></v-header>

    <div class="tab">
      <!--使用flex布局-->
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>

    </div>

    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>

  </div>
</template>

<script>
  // ./表明是当前路径
  import header from './components/header/header'

export default {
  name: 'App',
  components:{
    //引入,相当于自定义标签
    //不能直接写header,会报错;因为header是html默认留下的东西
    'v-header':header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

  //记住是id -->#
  //class -->.
    .tab
      display:flex
      width:100%
      height :40px
      line-height :40px
      /*background-color red*/
      .tab-item
        flex :1
        text-align: center
        & > a
          display: block
          font-size: 14px
          color: rgb(77, 85, 93)
          &.active
            color: rgb(240, 20, 20)

</style>
