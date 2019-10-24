<template>
    <el-form :model="getEditLogin" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-page-header @back="goBack" content="详情页面"></el-page-header>
        <hr>
        <el-form-item label="用户名" prop="username">
            <el-input type="text" v-model="getEditLogin.username"
                      @input="setEditLogin('username')"
                      autocomplete="off"></el-input>

        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="getEditLogin.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" v-model="getEditLogin.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
            <el-input v-model.number="getEditLogin.age"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
    import {vueMethods} from '@aliasAssets/js/utils';

    import {
        mapGetters,
        mapActions,
    } from 'vuex';

    export default {
        name: 'EditLogin',
        data() {
            return {
                rules: {
                    username: [{
                        validator: this.checkUserName
                    }],
                    pass: [
                        {validator: this.validatePass, trigger: 'blur'}
                    ],
                    checkPass: [
                        {validator: this.validatePass2, trigger: 'blur'}
                    ],
                    age: [
                        {validator: this.checkAge, trigger: 'blur'}
                    ]
                }
            }
        },
        computed: {
            ...mapGetters("EditLoginModule", ['getEditLogin'])
        },
        created() {
            console.log(this);
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },

            checkUserName(rule, value, callback) {
                if (!value) {
                    return callback(new Error('姓名不能为空'));
                }
                callback();
            },
            checkAge(rule, value, callback) {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            },
            validatePass(rule, value, callback) {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.getEditLogin.checkPass !== '') {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            },
            validatePass2(rule, value, callback) {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.getEditLogin.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            },

            ...mapActions('EditLoginModule', ['setEditLogin']),

            ...vueMethods,
        }
    }
</script>
