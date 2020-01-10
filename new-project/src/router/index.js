import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login/login.vue'
import Register from '../views/login/register.vue'

Vue.use(Router)

export default new Router({
    routes: [
        //login路由
        {
            path: '/',
            name: 'login',
            component: Login
        },
        // 登录页面
        {
            path:'/login',
            name:'login',
            component:Login
        },
        // 注册页面
        {
            path:'/register',
            name:'register',
            component:Register
        },
    ]
})
