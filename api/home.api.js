const Router = require('koa-router');

const router = new Router({
    prefix: '/'
});


router.get('/', ctx => {
    ctx.body = 'hello', ctx.db;
})



module.exports = router;