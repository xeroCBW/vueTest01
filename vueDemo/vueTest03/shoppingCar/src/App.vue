<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->

  <v-header></v-header>

    <div class="tab">
      <!--使用flex布局-->
      <div class="tab-item">商品</div>
      <div class="tab-item">评论</div>
      <div class="tab-item">商家</div>

    </div>
    <div class="content">
    </div>
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
  #app
    .tab
      display:flex
      width:100%
      height :40px
      line-height :40px
      background-color red
      .tab-item
        flex :1
        text-align: center



</style>
