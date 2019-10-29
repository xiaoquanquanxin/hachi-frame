//  ⚠️⚠️不要删！！！！重要！！⚠️⚠️
// import Vue from 'vue'
// import Vue from 'vue/dist/vue.esm.js';
import Router from 'vue-router';
import Welcome from "@aliasComponents/Welcome/Welcome.vue";
//  工具包
import {isUserLogin} from '@aliasAssets/js/utils.js';

//  登录页
import Login from '@aliasComponents/Login/Login.vue';

//  用户模块
const User = () => import(/* webpackChunkName: "async-user" */  '@aliasComponents/User/User.vue');
const UserInfo = () => import(/* webpackChunkName: "async-userinfo" */ '@aliasComponents/User/UserInfo.vue');
const UserList = () => import(/* webpackChunkName: "async-userlist" */ '@aliasComponents/User/UserList.vue');
const UserHome = () => import(/* webpackChunkName: "async-userhome" */ '@aliasComponents/User/UserHome.vue');

import AAA from "@aliasComponents/AAA.vue";
//  左面菜单栏
import Aside from "@aliasComponents/Aside/Aside.vue";

//  编辑登录信息
import EditLogin from '@aliasComponents/Login/EditLogin.vue';

//  历史记录,这是一个异步组件
const HistoryModule = () => import('@aliasComponents/EXAMPLE/HistoryModule/HistoryModule.vue');

Vue.use(Router);
const router = new Router({
    mode: 'hash',     //  需要linux配合设置一些东西
    fallback: false,        //  设置为false，ie9会强制刷新页面，但需要服务端渲染配合，不建议使用false
    routes: [
        {
            path: '/',
            name: '首页',
            components: {
                default: Welcome,
                aside: Aside,
            },
        },
        {
            path: '/login',
            name: '登录',
            components: {
                default: Login,
                aside: Aside,
            },
        },
        {
            path: '/aaa',
            name: 'aaa页面',
            //  别名
            alias: '/alias',
            components: {
                default: AAA,
                aside: Aside,
            },
        },
        {
            path: '/user',
            name: '用户管理',
            components: {
                default: User,
                aside: Aside,
            },
            children: [
                {path: 'userhome', component: UserHome, name: '用户首页'},
                {path: 'userlist', component: UserList, name: '用户列表'},
                // {path: 'userinfo', component: UserInfo, name: '用户信息'},
                {
                    path: 'userinfo',
                    component: UserInfo,
                    name: '某一个人的用户信息，传了个userid',
                    //  元信息，这里是需要登录
                    meta: {requiresAuth: true},
                    props: (route) => {
                        return {customQueryName: route.query.userid, customParams: 123};
                    },
                    beforeEnter: (to, from, next) => {
                        // console.log(to)

                        //  这个路由是admin特权查看的，别人进不来
                        //  这里最好校验session
                        new Promise((resolve, reject) => {
                            const timeOut = Math.random() * 2;
                            setTimeout(() => {
                                if (timeOut < 11.6) {
                                    resolve(timeOut);
                                } else {
                                    reject('timeout in ' + timeOut + ' seconds.');
                                }
                            }, 300);
                        }).then(function (_t) {
                            console.log(_t, '有权限');
                            next();
                        }).catch(function (reason) {
                            console.log(reason, '没有权限');
                            alert("你没有权限");
                            router.push(from.fullPath);
                        });
                    }
                },
                {path: '*', redirect: '/user/userhome'},
            ],
        },
        {
            name: '编辑登录信息',
            path: '/editLogin',
            components: {
                default: EditLogin,
                aside: Aside,
            },
        },
        {
            name: '历史记录',
            path: '/history',
            components: {
                default: HistoryModule,
                aside: Aside,
            },
        },


        {
            path: '*',
            redirect: '/',
            name: '重定向',
            components: {
                default: Welcome,
                aside: Aside,
            },
        }
    ],
});


import store from '../store';

//  如果用户没有登录，而点击其他页，则走了两次路由守卫
router.beforeEach((to, from, next) => {
    console.log('主守卫被调用');
    if (to.fullPath === '/login') {
        next();
        return;
    }
    //  如果用户需要登录
    if (to.matched.some(record => record.meta.requiresAuth)) {
        console.log(`需要验证登录的path : ${to.fullPath}`);
        //  用户没有登录
        if (!store.state.UserInfoModule.isUserLogin) {
            //  用户没登录，就跳转到登录页
            router.push({path: '/login'});
            return;
        }
    }
    next();
});
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};
export default router;