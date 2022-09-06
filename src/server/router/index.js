const router = require('koa-simple-router');
module.exports = function (app) {
    console.log(router);
    app.use(router(_ => {
        _.get('/', (ctx, next) => {
            ctx.body = `12`;
        });
        _.post('/name/:id', (ctx, next) => {
            // ...
        })
    }));
};