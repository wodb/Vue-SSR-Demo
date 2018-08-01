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
                            <el-submenu index="2">
                                <template slot="title">我的工作台</template>
                                <el-menu-item index="2-1">选项1</el-menu-item>
                                <el-menu-item index="2-2">选项2</el-menu-item>
                                <el-menu-item index="2-3">选项3</el-menu-item>
                                <el-submenu index="2-4">
                                    <template slot="title">选项4</template>
                                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                                </el-submenu>
                            </el-submenu>
                            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
                        </el-menu>
                    </nav>
                </div>
            </el-col>
        </el-row>
        <router-view class="main-container"></router-view>
        <transition name="el-fade-in">
            <el-button icon="el-icon-d-caret" class="top" v-show="top" @click="goTop" />
        </transition>
    </div>
</template>
<script>
    import { debounce } from '@/util/util'

    const handleScroll = debounce(function (e) {
        if (document.documentElement.scrollTop >= 200) {
            this.top = true
        }else {
            this.top = false
        }
    },500)

    export default {
        data() {
            return {
                top:false
            }
        },
        mounted() {
            window.addEventListener('scroll',handleScroll.bind(this))
        },
        destroyed() {
            window.removeEventListener('scroll',handleScroll.bind(this))
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath)
            },
            goTop() {
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
        background-color #fff;
        display flex;
        .head-log
            width 98px;
            height 38px;
            margin-top 12px;
            margin-right 12px;
    .top
        position fixed;
        right 30px;
        bottom 30px;
    .main-container
        position relative;
        top 75px;
        left 0
</style>