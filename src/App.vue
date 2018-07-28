<template>
  <div id="app">
    <router-link to="/index">index</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/top">top</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="stylus">
  #app
    a
      margin:0 10px;
</style>