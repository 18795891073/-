import Vue from 'vue'
import register from './register.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 图片验证码
import SIdentify from '../../components/identify'

Vue.use(ElementUI);
Vue.component("SIdentify",SIdentify);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#register',
    render: h => h(register)
})