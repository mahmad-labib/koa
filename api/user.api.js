const Router = require('koa-router');

const router = new Router({
    prefix: '/user'
});


router.get('/', ctx => {
    ctx.body = ctx.user;
})

module.exports = router;