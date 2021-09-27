<template>
  <div>
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="test">点我测试一下hello方法</button>
  </div>
</template>

<script lang="js">
export default {
  name: "School",
  data(){
    return {
      name: '理工大学',
      address: '北京',
    }
  },
  methods:{
    test(){
      this.hello()
    }
  }
}
</script>

<style scoped lang="scss">

</style>
