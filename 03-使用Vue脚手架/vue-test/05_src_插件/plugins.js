export default {
    install(Vue){
        // 全局过滤器
        // 定义全局指令
        // 定义混入
        // 给Vue原型上添加一个方法(vm和vc就都能用了)
        Vue.prototype.hello = () => {alert('你好啊')}
    }
}

