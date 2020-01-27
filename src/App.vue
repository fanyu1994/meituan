<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name:'App',
  created(){
    var _this = this
    //在页面加载时读取sessionStorage里的状态信息
    if(sessionStorage.getItem('store')){
      this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(sessionStorage.getItem('store'))))
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener('beforeunload',function(){
      sessionStorage.setItem('store',JSON.stringify(_this.$store.state))
    })
  },
  mounted(){
    document.querySelector("body").setAttribute('style',"margin:0;")
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
}

</style>
