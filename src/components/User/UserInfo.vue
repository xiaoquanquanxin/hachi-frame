<template>
    <div>
        <el-page-header @back="goBack" content="详情页面"></el-page-header>
        <el-row>
            <div v-text="JSON.stringify(data)"></div>
        </el-row>
        <el-row>
            <el-button @click="incrementIfOddOnRootSum(333)">增加333</el-button>
            <el-button @click="abc(333333)">增加333</el-button>
            <p v-text="getCount"></p>
            <hr>
            <p v-text="doubleVal"></p>
        </el-row>
    </div>
</template>
<script>
    //  工具包了里的方法
    import {vueMethods, toJSON} from "@aliasAssets/js/utils";

    import {
        //  vuex暴露的mapState，用于处理computed
        mapState,
        //  用于获取vuex里注册的组件的getter方法
        mapGetters,
        //  方法的handle
        mapActions,
        //  直接暴露方法了,不要这样
        mapMutations,
    } from 'vuex';

    export default {
        name: "UserList",
        //  路由前守卫
        beforeRouteEnter(to, from, next) {
            console.log('beforeRouteEnter', to.fullPath);
            console.log(to.params.userid);
            next();
        },
        //  路由更新守卫
        beforeRouteUpdate(to, from, next) {
            console.log('beforeRouteUpdate', to.fullPath);
            next();
        },
        computed: {
            //  计算属性的模块化写法  UserInfoModule是模块命名空间
            ...mapGetters("UserInfoModule", ['getCount', 'doubleVal'])

        },
        data: () => ({
            data: null,
        }),
        created() {
            this.data = this.$route.params;
        },
        methods: {
            goBack() {
                vueMethods.goBack.call(this);
            },
            ...mapActions('UserInfoModule', ['incrementIfOddOnRootSum']),
            abc(params) {
                console.log(this.$store.dispatch('UserInfoModule/incrementIfOddOnRootSum', params));
            }
        }
    }
</script>