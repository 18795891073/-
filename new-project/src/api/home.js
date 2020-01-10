import request from './core'
// import axios from 'axios'
export default {
    // 登录接口
    teacherLogin(data){
        return request({
            url:'/login/',
            method:'post',
            data
        })
    },
    // 注册接口
    register(data){
        return request({
            url:'/register/',
            method:'post',
            data
        })
    },
}

