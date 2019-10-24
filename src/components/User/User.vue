<template>
    <div>
        <h4>这里是用户模块，下面的都是用户模块的总视图</h4>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">
                <router-link :to="{ name:'用户首页', }" name="ad">用户首页</router-link>
            </el-menu-item>
            <el-menu-item index="2">
                <router-link :to="{ name: '用户列表',  query: { plan: 'private' }}">用户列表</router-link>
            </el-menu-item>
            <!--            <el-menu-item index="3">-->
            <!--                <router-link :to="{ path: 'userinfo',  query: { userid: 'private' }}">用户信息</router-link>-->
            <!--            </el-menu-item>-->
            <!--            <el-menu-item index="4">处理中心</el-menu-item>-->
        </el-menu>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: "User",
        data: () => ({
            activeIndex: 1,
        }),
        created(){
            // console.log(this.$route)
            // console.log(this.$router)
        },
        methods: {
            handleSelect(key, val) {
                console.log(key, val)
            }
        }
    }
</script>