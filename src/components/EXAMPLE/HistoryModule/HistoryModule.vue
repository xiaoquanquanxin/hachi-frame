<template>
    <div>
        <el-row>
            <el-button type="success"
                       @click="goHistory()"
            >回到最初的位置
            </el-button>
        </el-row>
    </div>
</template>
<script>
    export default {
        name: 'HistoryModule',
        data: () => ({}),
        methods: {
            goHistory() {
                console.log(history.length);
                this.$router.go(-history.length + 2);
            }
        }
    }
</script>
<style scoped>

</style>