<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由并携带 params 参数，to 的字符串写法 -->
        <!--        <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link>-->


        <!--        跳转路由并携带 params 参数，to 的对象写法-->
        <router-link :to="{
                  name: 'xiangqing', // 注意，当使用 params 参数时，这个只能用 name，用 path 会错误！！
                  query: {
                    id: m.id,
                    title: m.title
                  }
                }">
          {{ m.title }}
        </router-link>

      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script lang="js">
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        {id: '001', title: '消息001'},
        {id: '002', title: '消息002'},
        {id: '003', title: '消息003'},
      ]
    }
  }
}
</script>

<style scoped lang="scss">

</style>
