<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">Count 组件求和为：{{ sum }}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script lang="js">
import {nanoid} from 'nanoid'
import {mapState} from 'vuex'
export default {
  name: "Person",
  data(){
    return{
      name: ''
    }
  },
  computed:{
    ...mapState('personAbout', ['personList'])
  },
  methods:{
    add(){
      const personObj = {id: nanoid(), name: this.name}
      this.$store.commit('personAbout/ADD_PERSON', personObj)
      this.name = ''
    }
  }

}
</script>

<style scoped lang="scss">

</style>
