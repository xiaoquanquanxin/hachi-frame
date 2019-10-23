import Vuex from 'vuex';

Vue.use(Vuex);
//  用户信息模块的数据
import UserInfoModule from "./UserInfoModule";

export default new Vuex.Store({
    state: {count: '全局的数据'},
    strict: true,
    modules: {
        UserInfoModule,
    }
});