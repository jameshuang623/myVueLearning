<template>
  <div>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{myAge+1}}</h2>
    <button @click="updateAge">尝试修改收到的年龄</button>
  </div>
</template>

<script lang="js">
export default {
  name: "Student",
  data(){
    return {
      myAge: this.age // props的优先级更高
    }
  },
  methods:{
    updateAge(){
      this.myAge++
    }
  },
  // props:['name', 'sex', 'age'] // 简单接收


  // 接收的同时对数据进行类型限制
  // props:{
  //   name: String,
  //   age: Number,
  //   sex: String
  // }


  // 接收的同时对数据进行类型限制+默认值的指定+必要性的限制
  props:{
    name:{
      type: String,
      required: true // name 是必要的
    },
    age:{
      type: Number,
      default: 99
    },
    sex:{
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">

</style>
