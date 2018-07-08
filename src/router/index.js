import Vue from 'vue';
import VueRouter from 'vue-router';//引入vue-router，制作路由
import Home from '../components/home.vue';
import List from '../components/list.vue';
//制作路由表
Vue.use(VueRouter);//和以前不同的是，使用之前先use。作用是注册一些全局的组件。
export default new VueRouter({
    routes:[
        //key-value,对应的路径和组件名
        {path:'/home',component:Home},
        {path:'/list',component:List}
    ]
});