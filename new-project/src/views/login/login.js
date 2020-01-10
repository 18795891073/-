import Vue from 'vue'
import login from './login.vue'
// 图片验证码
import SIdentify from '../../components/identify'
Vue.component("SIdentify",SIdentify);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#login',
    render: h => h(login)
})