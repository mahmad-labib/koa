const Router = require('koa-router');

const router = new Router({
    prefix: '/user'
});


router.get('/', ctx => {
    ctx.body = ctx.user;
})

router.post('/login', ctx => ctx.passport.authenticate('local', {
    failureRedirect: '/login'
}));

module.exports = router;