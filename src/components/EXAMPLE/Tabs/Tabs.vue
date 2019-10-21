<template>
    <div>
        <el-tabs type="border-card" @tab-click="handleClick">
            <el-tab-pane>
                <span slot="label"><i class="el-icon-date"></i>
                    xxx
                </span>
                <div>我是选项卡1的内容,选项卡1跳转到本身，用户首页</div>
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i class="el-icon-date" fewafaw></i></span>
                <div>内容</div>
            </el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
    export default {
        name: "Tabs",
        data: () => ({

            activeName: 'second'

        }),
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>