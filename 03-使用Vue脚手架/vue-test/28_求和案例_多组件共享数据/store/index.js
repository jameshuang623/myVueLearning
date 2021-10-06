// 该文件用于创建 Vuex 中最为核心的 store
import Vue from "vue";
import Vuex from 'vuex'


Vue.use(Vuex)

// 准备 actions -- 用于响应组件中的动作
const actions = {
    /*jia(context, value){
        context.commit('JIA', value)
    },
    jian(context, value){
        context.commit('JIAN', value)
    },*/
    jiaOdd(context, value){
        if (context.state.sum % 2){
            context.commit('JIA', value)
        }
    },
    jiaWait(context, value){
        setTimeout(() => {
            context.commit('JIA', value)
        }, 500)
    }


}
// 准备 mutations -- 用于操作数据（state）
const mutations = {
    JIA(state, value){
        state.sum += value
    },
    JIAN(state, value){
        state.sum -= value
    },
    ADD_PERSON(state, value){
        console.log('mutations中的ADD_PERSON')
        state.personList.unshift(value)
    }
}
// 准备 state -- 用于存储数据
const state = {
    sum:0, // 当前的和
    school: '理工大学',
    subject: '前端',
    personList: [
        {id: '001', name: '张三'}
    ],
}

// 准备 getters -- 用于将 state 中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}


// 创建并暴露 store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
