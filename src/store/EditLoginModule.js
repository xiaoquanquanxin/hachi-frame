//  用户信息模块
const EditLoginModule = (() => {
    const namespaced = true;
    const state = () => {
        return {
            username: '权鑫',
            pass: '1111',
            checkPass: '1111',
            age: '22',

        }
    };
    // 同步修改状态（同步改变state状态）,必须是同步的因为要记录更新的状态，只有真正更新了，才能获得更新后的状态
    const mutations = {
        setValue(state, __map) {
            state[__map.key] = __map.value;
        }
    };
    //  们可以在 action 内部执行异步操作
    const actions = {
        setEditLogin({state, commit, rootState}, key) {
            commit('setValue', {key, value: event.target.value});
        }
    };
    const getters = {
        getEditLogin(state) {
            return state;
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

export default EditLoginModule;