//  ⚠️⚠️不要删！！！！重要！！⚠️⚠️
// import Vue from 'vue'
// import Vue from 'vue/dist/vue.esm.js';
Vue.config.productionTip = false;
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import router from './route/index';
// import elementUI from 'element-ui'
// Vue.use(elementUI);
Vue.use("eui");
import VueResource from 'vue-resource';
Vue.use(VueResource);

//  为ie配置vuex兼容
import 'babel-polyfill';

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，从而让整个应用都有路由功能,现在，应用已经启动了！

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount("#app");
//

//  使用externals，element-ui500k，vue100k，其他40k
//  不实用externals，单个vendor，770k