<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大十倍为：{{ bigSum }}</h3>
    <h3>我在{{school}}，学习{{ subject }}</h3>
    <h3 style="color: red">Person组件的总人数是：{{ personList.length }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script lang="js">
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  name: "Count",
  data(){
    return{
      n:1, // 用户选择的数字
    }
  },
  computed:{

    // 借助 mapState 生成计算属性，从 state 中读取数据。（数组写法）
    ...mapState(['sum', 'school', 'subject', 'personList']),

    ...mapGetters(['bigSum'])
  },

  methods: {

    // 借助 mapMutations 生成对应的方法，方法中会调用 commit 去联系 mutations（对象写法）
    // 也有数组写法
    ...mapMutations({increment: 'JIA', decrement: 'JIAN'}),

    ...mapActions({incrementOdd: 'jiaOdd', incrementWait: 'jiaWait'})

    // 借助 mapActions 生成对应的方法，方法中会调用 dispatch 去联系 actions（数组写法）
    // ...mapActions(['jiaOdd', 'jiaWait'])
  }
}
</script>

<style scoped lang="scss">
button{
  margin-left: 5px;
}
</style>
