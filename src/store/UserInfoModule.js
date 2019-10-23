//  用户信息模块
const UserInfoModule = (() => {
    const namespaced = true;
    const state = () => {
        return {count: 87,}
    };
    // 同步修改状态（同步改变state状态）,必须是同步的因为要记录更新的状态，只有真正更新了，才能获得更新后的状态
    const mutations = {
        increment(state, step) {
            // 这里的 `state` 对象是模块的局部状态
            state.count += step || 1;
        }
    };
    //  们可以在 action 内部执行异步操作
    const actions = {
        incrementIfOddOnRootSum({state, commit, rootState}, step) {
            commit('increment', step);
        }
    };
    const getters = {
        getCount(state, getters, rootState) {
            // console.log(state, getters, rootState);
            return state.count;
        },
        doubleVal(state) {
            // console.log(state.count);
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