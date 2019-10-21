<template>
    <div>
        <p>欢迎来到用户首页，用户首页是重定向的</p>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }">导航一</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/user/' }">去user</el-breadcrumb-item>
            <el-breadcrumb-item>当前页</el-breadcrumb-item>
        </el-breadcrumb>

        <el-row>
            <el-button @tab-click="handleClick">
                <router-link to="/" >首页</router-link>
                <router-link to="/user/userlist">userlist</router-link>
                <router-link to="/user/userinfo">userinfo</router-link>
            </el-button>
        </el-row>

    </div>
</template>
<script>
    export default {
        name: "UserHome",
        data: () => ({

        }),
        methods: {
            handleClick(tar,b){
                console.log(tar,b);
            }
        }
    }
</script>