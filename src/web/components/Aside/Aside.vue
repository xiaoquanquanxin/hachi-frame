<template>
    <div>
        <el-menu :default-active="defaultActive" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                 router="true"
        >
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/">
                        <router-link to="/" exact>
                            <i class="el-icon-location"></i>去首页
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="/aaa" router="true">
                        <router-link to="/aaa">
                            <i class="el-icon-location"></i>去aaa
                        </router-link>
                    </el-menu-item>

                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航二</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/user/">
                        <router-link to="/user/">
                            <i class="el-icon-location"></i>去user
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="2-1">
                        <router-link to="/user/userinfo/32" name="ad">
                            <i class="el-icon-location"></i>直接去userID===32的那个地方去
                        </router-link>
                    </el-menu-item>
                    <el-menu-item index="2-2">
                        <a href="https://element.eleme.cn/#/zh-CN/component/icon" target="_blank">
                            <i class="el-icon-location"></i>图标</a>
                    </el-menu-item>
                    <el-menu-item index="/history">
                        <router-link to="/history">
                            <i class="el-icon-location"></i>去history
                        </router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航三</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="3-1">选项1</el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>
                    <el-menu-item index="3-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

        </el-menu>
    </div>
</template>
<style scoped>

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
    }

    /*菜单的小li*/
    .el-menu-item {
        & i {
            color: inherit;
        }

        &.is-active i {
            color: inherit;
        }
    }
</style>

<script>
    export default {
        name: "Aside",
        // created() {
        //     console.log(this.defaultActive);
        //     // console.log(`/${this.$route.path.split('/')[1]}`);
        // },
        data() {
            return {
                isCollapse: false,
                defaultActive: this.getDefaultActive(),
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            getDefaultActive() {
                console.log(this.$route.path);
                console.log(location.href);
                const arr = this.$route.path.split('/');
                //  如果是二级路由等
                if (arr.length > 2) {
                    return `/${arr[1]}/`;
                }
                //  说明是一级路由
                return `/${arr[1]}`;
            }
        }
    }
</script>