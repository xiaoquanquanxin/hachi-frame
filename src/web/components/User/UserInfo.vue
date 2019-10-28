<template>
    <div>
        <el-page-header @back="goBack" content="详情页面"></el-page-header>
        <el-row>
            <div v-text="JSON.stringify(data)"></div>
        </el-row>
        <el-row>
            <el-button @click="a_increment(10)">增加10</el-button>
            <el-button @click="abc(1000)">abcclick</el-button>
            <p v-text="getCount"></p>
            <hr>
            <p v-text="doubleVal"></p>
        </el-row>
    </div>
</template>
<script>
    console.log('这是userinfo，看是同步还是异步');
    //  工具包里的方法
    import {goBack} from "@aliasAssets/js/utils";
    import {
        //  用于获取vuex里注册的组件的getter方法
        mapGetters,
        //  方法的handle
        mapActions,
    } from 'vuex';

    export default {
        name: "UserList",
        //  路由前守卫
        beforeRouteEnter(to, from, next) {
            console.log('beforeRouteEnter', to.fullPath);
            next(vm => {
                vm.getData();
            });
        },
        //  路由更新、复用守卫
        beforeRouteUpdate(to, from, next) {
            console.log('beforeRouteUpdate', to.fullPath);
            console.log(next);
            this.getData(() => next);
        },
        computed: {
            //  计算属性的模块化写法  UserInfoModule是模块命名空间
            ...mapGetters("UserInfoModule", ['getCount', 'doubleVal', 'g_isUserLogin']),
        },
        data: () => ({
            data: null,
        }),
        props: ['customQueryName', 'customParams'],
        methods: {
            ...{goBack},
            ...mapActions('UserInfoModule', ['a_increment']),
            getData(callback = function () {
            }) {
                new Promise((resolve, rejected) => {
                    setTimeout(() => {
                        resolve(`请求回来的数据是${Math.random()}`);
                    }, 1000);
                }).then(v => {
                    this.data = {
                        customQueryName: this.customQueryName,
                        customParams: this.customParams,
                        g_isUserLogin: this.g_isUserLogin,
                        resultData: v,
                    };
                    return v;
                }).then(v => {
                    callback(v)
                });
            },
            abc(params) {
                console.log(this.$store.dispatch('UserInfoModule/a_increment', params));
            }
        }
    }
</script>