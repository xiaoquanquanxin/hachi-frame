//  ⚠️⚠️不要删！！！！重要！！⚠️⚠️
// import Vue from 'vue'
// import Vue from 'vue/dist/vue.esm.js';
import Router from 'vue-router';
import Welcome from "@aliasComponents/Welcome/Welcome.vue";
//  工具包
import {getCookie} from '@aliasAssets/js/utils.js';

//  登录页
import Login from '@aliasComponents/Login/Login.vue';

//  用户模块
import User from '@aliasComponents/User/User.vue'
import UserInfo from '@aliasComponents/User/UserInfo.vue';
import UserList from '@aliasComponents/User/UserList.vue';
import UserHome from '@aliasComponents/User/UserHome.vue';

import AAA from "@aliasComponents/AAA.vue";
//  左面菜单栏
import Aside from "@aliasComponents/Aside/Aside.vue";

//  编辑登录信息
import EditLogin from '@aliasComponents/Login/EditLogin.vue';

//  历史记录
import HistoryModule from '@aliasComponents/EXAMPLE/HistoryModule/HistoryModule.vue';

Vue.use(Router);
const router = new Router({
    mode: 'hash',     //  需要linux配合设置一些东西
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
                    props: (route) => {
                        return {customQueryName: route.query.userid, customParams: 123};
                    },
                    beforeEnter: (to, from, next) => {
                        //  这个路由是admin特权查看的，别人进不来
                        //  这里最好校验session
                        new Promise((resolve, reject) => {
                            const timeOut = Math.random() * 2;
                            setTimeout(() => {
                                if (timeOut < 1.6) {
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
    ]
});


//  如果用户没有登录，而点击其他页，则走了两次路由守卫
router.beforeEach((to, from, next) => {
    // console.log(to.fullPath);
    const tempId = getCookie('my-cookie');
    const userInfo = sessionStorage.getItem('ssm_u_info');
    console.log('主守卫被调用');
    if (to.fullPath !== '/login' && (tempId == null || tempId === '' || userInfo == null || userInfo === '')) {
        if (!Boolean(tempId)) {
            console.error(`tempId : ${tempId}`);
        }
        if (!Boolean(userInfo)) {
            console.error(`tempId : ${userInfo}`);
        }
        router.push({path: '/login'});
        return
    }
    next();
});
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};
export default router;