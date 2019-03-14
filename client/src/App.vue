<template>
  <div id="app">
    <!--<Home></Home>-->
    <!--<Login></Login>-->
    <router-view></router-view>
  </div>
</template>

<script>
  import Login from './pages/Login/Login'
  import Home from './pages/Home'
export default {
  name: 'App',
  components:{
    Login,
    Home
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  #app
    width 100%
    height 100%
    background-color: #f5f5f5
    position relative

</style>
