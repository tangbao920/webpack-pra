<template>
    <div>
        <h1><span>{{msg}}</span></h1>
   <!--     <router-link :to="{path:'/home'}">首页</router-link>
        <router-link :to="{path:'/list'}">列表页</router-link>
        <router-view></router-view>-->
        <button @click="show">弹窗</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                msg:"欢迎你！"
            }
        },
        methods: {
            show:function () {
                console.log(this);
                this.$notify('太漂亮了！',{delay:8000});//设置弹窗内容和延迟关闭时间
            }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped></style>