/*
var add=(a,b)=>a+b;
let arry=[1,2,4,2,4,0];
let a= [...new Set(arry)];
console.log(a);

var obj={...{name:"wanglimei"},...{age:"7"}};
console.log(obj);
//引入css文件
import './test.css';//引入css
import './style.less';//引入less
let img=new Image();
import page from '../src/QQ20180125-0.jpg';
img.src=page;
document.body.appendChild(img);*/
import './test.css';//引入css
import App from './app.vue';//引用文件模板要从根目录下引用，引用第三方的可以直接引用（第三方的可以根据package.json查找）
import Vue from 'vue';//引入vue，不支持template
/*将处理路由的代码放到router文件夹下*/
/*import VueRouter from 'vue-router';//引入vue-router，制作路由
import Home from './components/home.vue';
import List from './components/list.vue';
//制作路由表
Vue.use(VueRouter);//和以前不同的是，使用之前先use。作用是注册一些全局的组件。
let router=new VueRouter({
   routes:[
       //key-value,对应的路径和组件名
       {path:'/home',component:Home},
       {path:'/list',component:List}
   ]
});*/
import router from './router/index.js';
import notify from './plugin/notify.js';
Vue.use(notify,{delay:2000});//使用带有install的对象，第二个参数是option参数
let vm=new Vue({
   el:'#app',
   render:h=>h(App),  //引入app.vue模板组件
   router
});


