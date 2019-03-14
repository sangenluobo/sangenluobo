<template>
    <div class="home">
      <el-button @click="$router.replace('/paichan')" type="primary" class="main_btn" round>排产单</el-button>
      <el-button type="primary" class="main_btn" round>财务</el-button>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">

  .home
    wihth 100%
    height 100%
    padding 0px
    margin 0px
    display flex
    flex-direction row
    align-items center
    justify-content space-around
    background-color: #666666
    .main_btn
      display flex
      flex-direction row
      align-items center
      justify-content center
      width 100px
      height 100px


</style>
