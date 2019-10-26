<template>
    <el-main class="login-el-main" :style="loginElMainStyle">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                 class="login-wrap demo-ruleForm">
            <el-row class="login-el-icon">
                <i class="el-icon-user"></i>
            </el-row>
            <el-form-item label="姓名" prop="name">
                <el-input type="text" v-model="ruleForm.name" autocomplete="off" clearable></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off" clearable></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </el-main>
</template>
<script>

    import bg from '@aliasAssets/images/bg.jpg';

    import {
        mapGetters,
        mapActions
    } from 'vuex';

    console.log(`url(${(bg)})`);

    export default {
        name: "Login",
        data: () => ({
            ruleForm: {
                pass: '',
                name: ''
            },
            rules: {},
            loginElMainStyle: {
                backgroundImage: `url(${(bg)})`,
            }
        }),
        mounted() {
            //  这几个，在login-el-main设置为position：fixed下就不需要了
            // document.getElementById('header').style.display = 'none';
            // document.getElementById('aside').style.display = 'none';
            // document.getElementById('footer').style.display = 'none';
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        console.log('登录成功');
                        //  这里是让登录的
                        this.a_setUserLogin(true);
                        window.location.href = '/'
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();

            },
            ...mapActions('UserInfoModule', ['a_setUserLogin'])
        }
    }
</script>
<style scoped>
    /*整个背景*/
    .login-el-main {
        overflow: hidden;
        background-repeat: no-repeat;
        background-size: cover;
        position: fixed;
        z-index: +100;
        padding: 0;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }

    /*登录的wrap*/
    .login-wrap {
        background-color: #fff;
        height: 340px;
        position: relative;
        width: 380px;
        margin: 120px auto;
        padding: 60px 80px 30px 40px;
    }

    /*头部的icon*/
    .login-el-icon {
        font-size: 75px;
        display: block;
        margin: auto;
        text-align: center;
        text-indent: 40px;
    }
</style>