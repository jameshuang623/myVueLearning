<template>
  <div>
    <h2>我是Home的内容</h2>
    <router-link to="/home/news">News</router-link>
    <router-link to="/home/message">Message</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="js">
export default {
  name: "Home"
}
</script>

<style scoped lang="scss">

</style>
