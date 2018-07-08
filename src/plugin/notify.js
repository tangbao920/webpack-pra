import modal from './notify.vue';//引入自己的vue要从根目录下开始引入，不能直接写notify.vue
let notify={
    //需要在这个对象中拥有一个install方法

};
notify.install=function (vue,options={delay:3000}) {
    console.log(vue);
    console.log(options);//传递过来的option参数
    vue.prototype.$notify=function (message,opt) {
        if(notify.el){//放置弹窗出现多次
            return;
        }
        options={...options,...opt};//es7语法，对属性合并覆盖(后面对象的覆盖前面的)这里就是调用时传递的设置参数覆盖并合并vue中
        //设置的默认的设置参数
        let v=vue.extend(modal);//返回的是一个构造函数的子类。参数是包含组件选项的对象
        let vm=new v;
        vm.msg=message;//设置弹窗显示的内容
        let oDiv=document.createElement('div');//创建一个div将实例挂载到这个元素上
        vm.$mount(oDiv);//挂载到一个div上。
        document.body.appendChild(vm.$el);//把当前实例的对象添加进body上。
        //将vm.$el保存起来
        notify.el=vm.$el;
        setTimeout(()=>{
           document.body.removeChild(vm.$el);//将元素删除掉
           notify.el=null;
        },options.delay);//延迟*秒将元素删除掉
    }
}
//导出这个包含install的对象，如果vue.use(这个插件)，那么就会调用这个install方法
export default notify;