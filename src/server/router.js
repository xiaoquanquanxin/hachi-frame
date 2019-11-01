const router = require('koa-router')();
const shareUrl = 'https://hachiseedland-beta.hachi-tech.com/apiV10/app//live/getCommodityDetail/v1.1?businessID=3ddbe44bea3346afad90c1371f02f141&commodityID=7f7b8cd2182c464487b2e893dc2e5dd2&basic=share';
router.get('/', async (ctx, next) => {
    console.log(`cookie是 🍎 🍎 ${ctx.headers.cookie}`);
    console.log('进入路由');
    await next();
});

const {
    ORIGIN
} = require('./config/configuration');

//转发 get 请求
var rp = require('request-promise');
router.get('/api/userLogin', async (ctx, next) => {
    console.log(`Referer是 🍉🍉🍉🍉 ${ctx.header.referer}`);
    console.log(`ORIGIN是 🍉🍉🍉🍉${ORIGIN}`);
    console.log(`签名是 🍎🍎🍎🍎 ${ctx.session.userinfo}`);
    if (!ctx.header.referer.includes(ORIGIN)) {
        throw new Error('xxxxx跨站点请求伪造');
    }
    ctx.body = await rp(shareUrl)
        .then(function (htmlString) {
            // console.log(htmlString);
            ctx.session.userinfo = '权鑫123';
            return htmlString;
        })
        .catch(function (err) {
            // Crawling failed...
            console.log(err);
            return err;
        });
    // console.log('🍊🍊🍊🍊🍊🍊🍊🍊🍊🍊');
    // console.log(ctx.body);
    await next();
});


module.exports = function (app) {
    app.use(router.routes());   /*启动路由*/
};