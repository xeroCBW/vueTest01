<template>


<div class="">

  <h1>这个是activeManage</h1>

  <ol>
    <li v-for="todo in todos">
      {{ todo.text }}
    </li>
  </ol>

</div>

</template>

<script>
  export default {
    name: "index",
    data(){
     return{
       todos:[

         {text : "学好vue"},
         {text:"认真做好开发"},
         {text:"早日建设好自己的网站后台"},
         {text:"前台页面的事情以后处理"},
         {text:"关键认清楚方向"}


       ]
     }


    }
  }
</script>

<style scoped>

</style>
