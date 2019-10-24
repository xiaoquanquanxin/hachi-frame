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