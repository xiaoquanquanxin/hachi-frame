<template>
    <div>
        <el-container>
            <el-header>Header</el-header>
            <el-container>
                <el-aside width="200px">我是AAA</el-aside>
                <el-main>Main</el-main>
            </el-container>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>
<script>
    export default {
        name: "AAA",
        data: () => ({
            data: 1234
        }),
        methods: {}
    }

</script>
<style scoped>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        height: 100%;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
    }

    body > .el-container {
        margin-bottom: 40px;
    }
</style>