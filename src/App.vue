<template>
    <div id="app">
        <el-row>
            <el-col :span="24" class="bg-white">
                <div class="head-content">
                    <img src="/public/logo-48.png" alt="logo" class="head-log">
                    <nav class="main-nav">
                        <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
                            <el-menu-item index="/index">首页</el-menu-item>
                            <el-menu-item index="/books/">小册</el-menu-item>
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
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath)
            }
        }
    }
</script>
<style lang="stylus">
    .head-content
        width 1200px;
        margin 0 auto;
        height 60px;
        border-bottom 1px solid #f1f1f1;
        background-color #fff;
        display flex;
        .head-log
            margin-right 30px;
            width 48px;
            height 48px;
            margin-top 6px;

</style>