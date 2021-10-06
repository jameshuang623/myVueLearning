// 该文件用于创建 Vuex 中最为核心的 store
import Vue from "vue";
import Vuex from 'vuex'


Vue.use(Vuex)


// 求和相关的配置
const countOptions = {
    namespaced: true,
    actions: {
        jiaOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('JIA', value)
            }
        },
        jiaWait(context, value) {
            setTimeout(() => {
                context.commit('JIA', value)
            }, 500)
        }
    },
    mutations: {
        JIA(state, value) {
            state.sum += value
        },
        JIAN(state, value) {
            state.sum -= value
        },
    },
    state: {
        sum: 0, // 当前的和
        school: '理工大学',
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    },
}


// 人员管理相关的配置
const personOptions = {
    namespaced: true,
    actions: {},
    mutations: {
        ADD_PERSON(state, value) {
            console.log('mutations中的ADD_PERSON')
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            {id: '001', name: '张三'}
        ],
    },
    getters: {},
}



// 创建并暴露 store
export default new Vuex.Store({
    modules:{
        countAbout: countOptions,
        personAbout: personOptions
    }
})
