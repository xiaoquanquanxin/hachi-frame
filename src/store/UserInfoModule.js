//  用户信息模块
const UserInfoModule = (() => {
    const namespaced = true;
    const state = {
        count: 87,
    };
    // 同步修改状态（同步改变state状态）
    const mutations = {
        increment(state, step) {
            // 这里的 `state` 对象是模块的局部状态
            state.count += step || 1;
        }
    };
    const actions = {
        incrementIfOddOnRootSum({state, commit, rootState}, step) {
            commit('increment', step);
        }
    };
    const getters = {
        getCount(state) {
            return state.count;
        },
        doubleVal(state) {
            console.log(state.count);
            return state.count * 2 + '这就是一个小的computed';
        },
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