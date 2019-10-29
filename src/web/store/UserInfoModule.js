import {
    setUserLogin,
    isUserLogin,
} from '@aliasAssets/js/utils';
//  用户信息模块
const UserInfoModule = (() => {
    const namespaced = true;
    const state = () => {
        return {
            count: 87,
            isUserLogin: isUserLogin(),
        }
    };
    // 同步修改状态（同步改变state状态）,必须是同步的因为要记录更新的状态，只有真正更新了，才能获得更新后的状态
    const mutations = {
        m_increment(state, step) {
            // 这里的 `state` 对象是模块的局部状态
            state.count += step || 1;
        },
    };
    //  们可以在 action 内部执行异步操作
    const actions = {
        a_increment({state, commit, rootState}, step) {
            commit('m_increment', step);
        },
        //  用户登录、退出的触发方法
        a_setUserLogin({state, commit, rootState}, status) {
            setUserLogin(status);
        }
    };
    const getters = {
        getCount(state, getters, rootState) {
            return state.count;
        },
        doubleVal(state) {
            // console.log(state.count);
            return state.count * 2 + '这就是一个小的computed';
        },
        g_isUserLogin(state) {
            return state.isUserLogin;
        }
    };
    return {
        namespaced,
        state,
        mutations,
        getters,
        actions,
    }
})();

export default UserInfoModule;