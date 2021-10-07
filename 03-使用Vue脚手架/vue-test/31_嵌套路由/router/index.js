// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";


// 创建并暴露一个
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children:[
                {
                    path: 'news', // 一定不要加 /
                    component: News
                },
                {
                    path: 'message',
                    component: Message
                }
            ]
        },
    ]
})


