<template>


<div class="">

  <h1>这个是activeManage</h1>

  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>

  <hr/>
  <h1> 基本介绍 </h1>

 <table>
   <li> v-text</li>
   <li> v-if</li>
   <li> v-bind</li>
   <li> v-on</li>


 </table>

  <hr/>

  <h1>v-on</h1>
  这里写v-on的一些方法,v-on可以简写成@click
  貌似第一种方法已经不行了
  <!--<button v-on:click="doThis">这里使用的是v-on</button>-->
  <button @click="doThis">这里使用的是"@"</button>

  <hr/>
  <h1>v-bind</h1>

  绑定事件,实现双向绑定

  <hr/>
  <h1>存储功能</h1>


  <input type="text" v-bind:value="storeValue"/>








</div>

</template>

<script>
  export default {
    name: "index",
    data(){
     return {
       todos: [
          //这里使用的是v-for进行渲染
         {text: "学好vue"},
         {text: "认真做好开发"},
         {text: "早日建设好自己的网站后台"},
         {text: "前台页面的事情以后处理"},
         {text: "关键认清楚方向"}
       ],
       storeValue :"123"
     }
    },

    methods:{
      //这里写常用的一些方法

      doThis(){

        alert("doThis")

      }

    },

    created:{
      //这里写一些create的方法

    }
  }
</script>

<style scoped>

</style>
