<template>

  <div id="firstComponent">

    <hr/>
    这个实现了从不不同vue中导入另外一个文件
    以下从另外一个vue中导入的文件
    <h1>this is first component</h1>


  </div>

</template>

<script type="text/javascript">
  export default {
    name: 'firstComponent',
    data(){
      return{
        msg:"firstComponent"
      }
    }
  }
</script>

<style scoped>

</style>
