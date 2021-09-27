<template>
  <div>
    <Student name="李四" sex="女" :age="18"></Student>
    <Student name="王老五" sex="男" :age="19"></Student>
  </div>
</template>

<script lang="js">
import Student from "./components/Student";
export default {
  name: "App",
  components:{Student},
  data(){
    return{
      msg: '欢迎学习Vue！'
    }
  },
}
</script>

<style scoped lang="scss">

</style>
