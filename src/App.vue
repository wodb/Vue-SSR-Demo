<template>
    <div id="app">
        <el-row class="app-head">
            <el-col :span="24" class="bg-white">
                <div class="head-content">
                    <img src="/public/logo-98.png" alt="logo" class="head-log">
                    <nav class="main-nav">
                        <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
                            <el-menu-item index="/index">首页</el-menu-item>
                            <el-menu-item index="/books">小册</el-menu-item>
                        </el-menu>
                    </nav>
                    <div class="main-right">
                        <span class="login" @click.stop.prevent="handleLogin">登录</span>
                        <span>·</span>
                        <span class="register">注册</span>
                    </div>
                </div>
            </el-col>
        </el-row>
        <login v-if="possibleLogin" :handleLogin="handleLogin"/>
        <router-view class="main-container"></router-view>
        <transition name="el-fade-in">
            <el-button icon="el-icon-d-caret" class="top" v-show="top" @click="handleGoTop" />
        </transition>
    </div>
</template>
<script>
    import { debounce } from '@/util/util'
    import login from '@/pages/login/index.vue'
    export default {
        data() {
            return {
                top: false,
                possibleLogin: false
            }
        },
        components:{
            login
        },
        mounted() {
            this.scrollTop = debounce(this.handleScroll,500)
            window.addEventListener('scroll',this.scrollTop)
        },
        destroyed() {
            window.removeEventListener('scroll',this.scrollTop)
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath)
            },
            handleScroll(){
                if (document.documentElement.scrollTop >= 200) {
                    this.top = true
                }else {
                    this.top = false
                }
            },
            handleGoTop() {
                let timer = null
                const doc = document.documentElement
                const scrollTo = 0
                clearInterval(timer)
                timer = setInterval(() => {
                    // 当前的值
                    let currentVal = doc.scrollTop

                    let speed = (scrollTo - currentVal) / 10

                    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)

                    currentVal += speed

                    doc.scrollTop = currentVal

                    if (scrollTo == currentVal) {
                        clearInterval(timer)
                    }
                },15)
            },
            handleLogin() {
                this.possibleLogin = !this.possibleLogin
            }
        }
    }
</script>
<style lang="stylus">
    .app-head
        position fixed;
        top 0;
        left 0;
        width 100%;
        z-index 10
        border-bottom 1px solid #f1f1f1;
    .head-content
        width 1200px;
        margin 0 auto;
        height 60px;
        line-height 60px
        background-color #fff;
        display flex;
        position relative
        .head-log
            width 98px;
            height 38px;
            margin-top 12px;
            margin-right 12px;
    .top
        position fixed;
        right 30px;
        bottom 30px;
        width 50px;
    .main-container
        margin-top 75px!important
    .main-right
        position absolute
        right 10px
        top 0
        width 85px
        display flex
        justify-content space-between
        .login,.register
            cursor pointer
            color #007fff
            font-size 16px
            font-weight 700
</style>