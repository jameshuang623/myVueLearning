<template>
  <div>
    <Banner></Banner>
    <router-link replace :to="{name: 'guanyu'}">About</router-link>
    <router-link to="/home">Home</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="js">
import Banner from "./components/Banner";
export default {
  name: "App",
  components:{Banner}
}
</script>

<style scoped lang="scss">

</style>
