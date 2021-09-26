<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM" ref="btn">点我输出上方的 DOM 元素</button>
    <School ref="sch"></School>
  </div>
</template>

<script lang="js">
import School from "./components/School";
export default {
  name: "App",
  components:{School},
  data(){
    return{
      msg: '欢迎学习Vue！'
    }
  },
  methods:{
    showDOM(){
      console.log(this.$refs.title)
      console.log(this.$refs.btn)
      console.log(this.$refs.sch)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
