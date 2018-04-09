<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-view/>-->

<header></header>

    <div class="tab">

      我是tab

    </div>

    <div class="content">

      我是content

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
    header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
