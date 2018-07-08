<template>
    <div>
        <div class="notify">{{msg}}</div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                msg:'太可爱了！'
            }
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>
<style scoped>
    .notify{
        width: 200px;
        height: 200px;
        text-align: center;
        border:1px solid red;
        border-radius: 5px;
        background:greenyellow;
    }
</style>