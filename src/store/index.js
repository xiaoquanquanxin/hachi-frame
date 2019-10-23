import Vuex from 'vuex';

Vue.use(Vuex);

//  环境
import {ENV} from '@aliasConfig/webpack.environment.js';
console.log(ENV);
//  用户信息模块的数据
import UserInfoModule from "./UserInfoModule";


//  vuex的插件
import {myBasicPlugin, myPluginWithSnapshot} from './customPlugin';

export default new Vuex.Store({
    state: {count: '全局的数据'},
    strict: true,
    plugins: process.env.NODE_ENV !== 'production'
        ? [myBasicPlugin, myPluginWithSnapshot]
        : [myPluginWithSnapshot],

    modules: {
        UserInfoModule,
    }
});