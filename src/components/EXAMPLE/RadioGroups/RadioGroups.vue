<template>
    <div>
        <el-radio-group v-model="radio" @change="radioChange">
            <el-radio :label="3">备选项</el-radio>
            <el-radio :label="6">备选项</el-radio>
            <el-radio :label="9">备选项</el-radio>
        </el-radio-group>
    </div>


</template>
<script>
    export default {
        name: "RadioGroups",
        data: () => ({
            radio: 1
        }),
        methods: {
            radioChange(e) {
                window.console.log(e)
            }
        }
    }
</script>