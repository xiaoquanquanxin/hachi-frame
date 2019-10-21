<template>
    <div class="fr">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4" popper-append-to-body="true">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                    <el-submenu index="2-4-4" popper-append-to-body="true">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-4-1">选项1</el-menu-item>
                        <el-menu-item index="2-4-4-2">选项2</el-menu-item>
                        <el-menu-item index="2-4-4-3">选项3</el-menu-item>
                    </el-submenu>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-location"></i>
                <router-link to="/login">登陆</router-link>
            </el-menu-item>
        </el-menu>
        <div class="line"></div>
    </div>
</template>
<style scoped>
    @import "~@aliasAssets/style/layout.css";

</style>
<script>
    export default {
        name: 'Header',
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
