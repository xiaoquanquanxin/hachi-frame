//  基础插件
const myBasicPlugin = (store) => {
    store.subscribe((mutation, state) => {
        console.log(`负载是${mutation.payload}`);
        // console.log(mutation, state);
        // store.commit('UserInfoModule/increment', 1);
    });
};
//  比较某个值的变化
const myPluginWithSnapshot = store => {
    let prevState = JSON.parse(JSON.stringify(store.state.UserInfoModule));
    store.subscribe((mutation, state) => {
        let currentState = JSON.parse(JSON.stringify(state));
        console.log('上一次state的状态是', prevState.UserInfoModule);
        console.log('这一次state的状态是', currentState.UserInfoModule);
        // 比较 prevState 和 currentState...
        // 保存状态，用于下一次 mutation
        prevState = currentState;
    })
};
export {
    myBasicPlugin,
    myPluginWithSnapshot,
}
