<template>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/bar' }">
<!--                <router-link >首页</router-link>-->
                首页
            </el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/activity' }">普通to</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/another' }" :replace="true">有replace</el-breadcrumb-item>
            <el-breadcrumb-item>当前页</el-breadcrumb-item>
        </el-breadcrumb>

        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/activity' }">to</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/another' }" :replace="true">有replace</el-breadcrumb-item>
            <el-breadcrumb-item>当前页</el-breadcrumb-item>
        </el-breadcrumb>

        <el-page-header @back="goBack" content="详情页面">
        </el-page-header>

        <CheckboxGroups></CheckboxGroups>
        <InputGroups></InputGroups>
        <RadioGroups></RadioGroups>
        <ButtonGroups></ButtonGroups>
        <AsyncInput></AsyncInput>
    </div>
</template>
<script>
    //  按钮组
    import ButtonGroups from "../ButtonGroups/ButtonGroups.vue";
    //  单选组
    import RadioGroups from "../RadioGroups/RadioGroups.vue";
    //  多选组
    import CheckboxGroups from "../CheckboxGroups/CheckboxGroups.vue";
    //  输入框
    import InputGroups from "../InputGroups/InputGroups.vue";
    //  异步数据input请求
    import AsyncInput from "../AsyncInput/AsyncInput.vue";

    export default {
        name: "Main",
        methods: {
            goBack() {
                window.console.log(this);
            }
        },
        components: {
            ButtonGroups,
            RadioGroups,
            CheckboxGroups,
            InputGroups,
            AsyncInput,

        }
    }
</script>
