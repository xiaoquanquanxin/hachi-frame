<template>
    <div>
        <el-container>
            <el-header id="header">
                <Header></Header>
            </el-header>
            <el-container id="container" :style="{height:containerInnerHeight}">
                <el-aside width="200px" id="aside">
                    <Aside></Aside>
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
    import Aside from "@aliasComponents/Aside/Aside.vue";
    import Header from "@aliasComponents/Header/Header.vue";

    import {vueMethods} from "@aliasAssets/js/utils";

    export default {
        //  工程框架，最外面的框架
        name: "EngineeringFramework",
        data: () => ({
            containerInnerHeight: 0,
        }),
        created() {
            console.log(`this.goBack------------  ${this.goBack}`);

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
            goBack() {
                vueMethods.goBack.call(this);
            }
        },
        components: {
            Aside,
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
</style>