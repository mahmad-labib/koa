const koa = require("koa")
const app = new koa();

app.use(async  (ctx)=> {
	ctx.body = "Hello World!";
});

app.listen(3000);
console.log("The app is listening. Port 3000");