<template>
    <div id="main">
        <!-- 底部导航主路由 -->
        <transition
        enter-active-class = "animate__animated animate__jello"
        >
        <router-view></router-view>
        </transition>
        <!-- 底部路由 -->
        <van-tabbar v-model="active" active-color="#FE6100" inactive-color="#D0D0D0" route>
            <van-tabbar-item icon="wap-home" to="/Home">首页</van-tabbar-item>
            <van-tabbar-item icon="balance-list" to="/Course">课程</van-tabbar-item>
            <van-tabbar-item icon="underway" to="/AuoutCourse">约课记录</van-tabbar-item>
            <van-tabbar-item icon="manager" to="/Profile">个人</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active:0,
            show:true
        }
    },
    methods: {
        
    },
    mounted() {
        
    }
}
</script>
<style lang="scss">
    
</style>