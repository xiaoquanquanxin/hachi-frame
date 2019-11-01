const {resolve} = require('path');
const {
    PORT,       //  端口
    __WEB,      //  web位置
    __PUBLIC,   //  public位置
} = require('./config/configuration');
//  koa
const Koa = require('koa');
//  初始化
const APP = new Koa();
//  设置静态文件
// console.log('🍊🍊🍊🍊', __WEB);
APP.use(require('koa-static')(__WEB));
// console.log('🍊🍊🍊🍊', __PUBLIC);
APP.use(require('koa-static')(__PUBLIC));


//  session
const cookieSession = require('./server_session')(APP);
//  log
APP.use(async (ctx, next) => {
    await next();
    // console.log(`${ctx.method} ${ctx.url}`);
    // console.log(`环境是：${APP.env}`);
    // console.log('------------------------------------------------------------');
});

// get session
APP.use(async (ctx, next) => {
    // console.log(`签名是${ctx.session.userinfo}`);
    await next();
});


//  route
const router = require('./router')(APP);


APP.listen(PORT);
