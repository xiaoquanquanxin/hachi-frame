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
            component: Welcome,
        },
        {
            path: '/login',
            name: '登录',
            component: Login
        },
        {
            path: '/aaa',
            name: 'aaa页面',
            component: AAA
        },
        {
            path: '/user',
            component: User,
            name: '用户管理',
            children: [
                {path: 'userhome', component: UserHome, name: '用户首页'},
                {path: 'userlist', component: UserList, name: '用户列表'},
                {path: 'userinfo', component: UserInfo, name: '用户信息'},
                {
                    path: 'userinfo/:userid', component: UserInfo, name: '某一个人的用户信息，传了个userid',
                    beforeEnter: (to, from, next) => {
                        //  这里最好校验session
                        new Promise(function (resolve, reject) {
                            const timeOut = Math.random() * 2;
                            setTimeout(function () {
                                if (timeOut < 1) {
                                    resolve(timeOut);
                                } else {
                                    reject('timeout in ' + timeOut + ' seconds.');
                                }
                            }, timeOut * 1000);
                        }).then(function (_t) {
                            console.log(_t, '有权限');
                            next();
                        }).catch(function (reason) {
                            console.log(reason, '没有权限');
                            alert("你没有权限");
                        });
                    }
                },
                {path: '*', redirect: '/user/userhome'},
            ]
        },
        {
            name: '编辑登录信息',
            path: '/editLogin',
            component: EditLogin,
        },
        {
            name: '历史记录',
            path: '/history',
            component: HistoryModule,
        },

        {
            path: '*',
            component: Welcome,
            redirect: '/',
            name: '重定向',
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