<template>
    <div>
        <el-container>
            <el-header id="header">
                <Header></Header>
            </el-header>
            <el-container id="container" :style="{height:containerInnerHeight}">
                <el-aside width="200px" id="aside">
                    <router-view name="aside"></router-view>
                </el-aside>
                <!-- 路由匹配到的组件将渲染在这里 -->

                <el-main id="main">
                    <router-view></router-view>
                </el-main>
            </el-container>
            <el-footer id="footer">脚部发发发</el-footer>
        </el-container>
    </div>
</template>
<script>
    import Header from "@aliasComponents/Header/Header.vue";


    export default {
        //  工程框架，最外面的框架
        name: "EngineeringFramework",
        data: () => ({
            containerInnerHeight: 0,
        }),
        created() {
            this.containerHeightReset();
            const ResizeTimeout = 1000 / 60;
            let isResized = false;
            window.addEventListener('resize', () => {
                if (isResized) {
                    return;
                }
                isResized = true;
                setTimeout(() => {
                    this.containerHeightReset();
                    isResized = false;
                }, ResizeTimeout);
            });
        },
        methods: {
            containerHeightReset() {
                this.containerInnerHeight = `${window.innerHeight - 60 - 60}px`;
            },
        },
        components: {
            Header,
        }
    }
</script>
<style scoped>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
    }

    .el-main {
        background-color: #dee7f2;
    }

    #container {
        position: relative;
    }

    #aside {
        position: relative;
        height: 100%;
        float: left;
    }

    #aside > div {
        top: 0;
        left: 0;
        bottom: 0;
        position: absolute;
        overflow: hidden;
        width: 200px;
        z-index: +10;
    }

    #main {
        height: 100%;
        position: relative;
        top: 0;
        left: 0;
        bottom: 0;
        /*margin-left: 200px\0;*/
    }

    #header > div {
        height: 60px;
    }

</style>