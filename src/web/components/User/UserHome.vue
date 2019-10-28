<template>
    <div>
        <p>欢迎来到用户首页，用户首页是重定向的</p>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ name:'首页' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/user/' }">去user</el-breadcrumb-item>
            <el-breadcrumb-item>当前页</el-breadcrumb-item>
        </el-breadcrumb>

        <p>这里是用户首页</p>

    </div>
</template>
<script>
    export default {
        name: "UserHome",
        data: () => ({}),
        methods: {
            handleClick(tar, b) {
                console.log(tar, b);
            }
        }
    }
</script>