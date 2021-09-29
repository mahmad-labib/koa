const Router = require('koa-router');

const router = new Router({
    prefix: '/db'
});

router.get('/createdb', ctx => {
    let sql = 'CREATE DATABASE test';
    ctx.db.query(sql, ctx => {
        if (ctx.err) ctx.res('database already exists');
        ctx.res.send('Database created...');
    });
});

module.exports = router;