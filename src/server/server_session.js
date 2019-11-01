const cookieSession = require('koa-session');
const KEYS = ['1', '2', '3'];
const CONFIG = {
    key: 'user.sess', /** 默认 */
    maxAge: 1000 * 60 * 60 * 24,  /*  cookie的过期时间        【需要修改】  */
    overwrite: true, /** (boolean) can overwrite or not (default true)    没有效果，默认 */
    httpOnly: true, /**  true表示只有服务器端可以获取cookie */
    signed: true, /** 默认 签名 */
    rolling: true, /** 在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false） 【需要修改】 */
    renew: false, /** (boolean) renew session when session is nearly expired      【需要修改】*/
};

// {
//     cookieSession,
//         CONFIG,
//         KEYS,
// };
module.exports = function (app) {
    app.keys = KEYS;
    app.use(cookieSession(CONFIG, app));
};