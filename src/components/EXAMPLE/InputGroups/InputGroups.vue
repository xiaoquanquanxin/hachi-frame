<template>
    <div class="el-row">
        <div class="demo-input-suffix el-col-4">
            属性方式：
            <el-input
                    placeholder="请选择日期"
                    suffix-icon="el-icon-date"
                    v-model="input1">
            </el-input>
            <el-input
                    placeholder="请输入内容"
                    prefix-icon="el-icon-search"
                    v-model="input2">
            </el-input>
        </div>
        <div class="demo-input-suffix el-col-4">
            slot 方式：
            <el-input
                    placeholder="请选择日期"
                    v-model="input3">
                <i slot="suffix" class="el-input__icon el-icon-date"></i>
            </el-input>
            <el-input
                    placeholder="请输入内容"
                    v-model="input4">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
        </div>
    </div>
</template>

<script>
    export default {
        name: "InputGroups",
        data() {
            return {
                input1: '',
                input2: '',
                input3: '',
                input4: ''
            }
        }
    }
</script>