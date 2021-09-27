<template>
  <div>
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script lang="js">
// 引入一个hunhe
import {hunhe,hunhe2} from '../mixin'
export default {
  name: "School",
  data(){
    return {
      name: '理工大学',
      address: '北京',
      x: 666 // mixins 不改变组件内的data
    }
  },
  // mixins: [hunhe,hunhe2],
  // mounted(){
  //   console.log('你好啊！！！！')
  // }
}
</script>

<style scoped lang="scss">

</style>
