<template>
  <div>
    <h1>vue-router demo</h1>
    <button @click="back">后退</button>
    <button @click="forward">前进</button>
    <button @click="test">测试一下go</button>
  </div>
</template>

<script lang="js">
export default {
  name: "Banner",
  methods:{
    back(){
      this.$router.back()
    },
    forward(){
      this.$router.forward()
    },
    test(){
      this.$router.go(-2)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
