// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";

// 引入组件
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";


// 创建并暴露一个
const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: {isAuth: true, title: '关于'}
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: {title: '主页'},
            children: [
                {
                    name: 'xinwen',
                    path: 'news', // 一定不要加 /
                    component: News,
                    meta: {isAuth: true, title: '新闻'},
                    // 独享路由守卫只有这一个，没有 afterEnter，可以与全局后置路由守卫搭配使用
                    /*beforeEnter: (to, from, next) => {
                        console.log('前置路由守卫', to, from)
                        if (to.meta.isAuth) {
                            if (localStorage.getItem('school') === 'atguigu') {
                                next()
                            } else {
                                alert('学校名不对，无权限查看！')
                            }
                        } else {
                            next()
                        }
                    }*/
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: {isAuth: true, title: '消息'},
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail',
                            component: Detail,
                            meta: {isAuth: true, title: '详情'},
                            // props 的第一种写法，值为对象
                            // 该对象中的所有 key-value 都会以 props 的形式传给 Detail 组件
                            // props:{a:1, b:'hello'}

                            // props 的第二种写法，值为布尔值
                            // 若布尔值为真，就会把该路由组件收到的所有 params 参数，以 props 的形式传给 Detail 组件
                            // props: true

                            // props 的第三种写法，值为函数
                            props($route) {
                                return {id: $route.query.id, title: $route.query.title}
                            }
                        },
                    ]
                }
            ]
        },
    ]
})


// 全局前置路由守卫——初始化的时候被调用、每次路由切换之前被调用
/*router.beforeEach((to,from,next)=>{
    console.log('前置路由守卫',to,from)
    if(to.meta.isAuth){
        if (localStorage.getItem('school') === 'atguigu'){
            next()
        } else {
            alert('学校名不对，无权限查看！')
        }
    } else {
        next()
    }
})*/


// 全局后置路由守卫——初始化的时候被调用、每次路由切换之后被调用
/*router.afterEach((to,from)=>{
    console.log('后置路由守卫',to,from)
    document.title = to.meta.title
})*/

export default router







