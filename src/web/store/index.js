import Vuex from 'vuex';

Vue.use(Vuex);

//  环境
import {ENV} from './environment.js';
//  用户信息模块的数据
import UserInfoModule from "./UserInfoModule";
import EditLoginModule from "./EditLoginModule";
//  vuex的插件
import {
    myBasicPlugin,
    myPluginWithSnapshot
} from './customPlugin';
//  vuex日志
import {logger} from './logger';

//  插件列表
const plugins = [myPluginWithSnapshot];
let strict = true;
if (ENV === 'development') {
    plugins.push(myBasicPlugin, logger);
    strict = !strict;
}
export default new Vuex.Store({
    state: {count: '全局的数据'},
    //  仅在开发环境下使用严格模式，以免性能损失
    strict: strict,
    plugins: plugins,
    modules: {
        UserInfoModule,
        EditLoginModule,
    }
});


//  热更新，感觉没啥必要
(() => {
    return;
    if (module.hot) {
        // 使 action 和 mutation 成为可热重载模块
        module.hot.accept(['./UserInfoModule'], () => {
            // 获取更新后的模块
            // 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
            const newMutations = require('./UserInfoModule').default;
            // 加载新模块
            store.hotUpdate({
                modules: {
                    newMutations,
                }
            })
        })
    }
})();