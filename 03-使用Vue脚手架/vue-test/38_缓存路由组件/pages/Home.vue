<template>
  <div>
    <h2>我是Home的内容</h2>
    <router-link to="/home/news">News</router-link>
    <router-link to="/home/message">Message</router-link>
    <keep-alive include="News"> <!-- include 里指的是组件名（name）-->
      <router-view></router-view>
    </keep-alive>

    <!--    缓存多个路由组件-->
    <!--    <keep-alive :include="['News', 'Message']">-->
    <!--      <router-view></router-view>-->
    <!--    </keep-alive>-->
  </div>
</template>

<script lang="js">
export default {
  name: "Home"
}
</script>

<style scoped lang="scss">

</style>
