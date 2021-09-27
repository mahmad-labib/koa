const koa = require("koa")
const app = new koa();
const config = require('./config/default')
const mysql = require('./mysql')


var _ = require("koa-route");
var parse = require("co-body");

// app.send(mysql)


app.use(_.post("/user", saveUser));

// app.use(_.get("/user/:id", getUser));

function* saveUser() {
	var userFormRequest = yield parse(this);
	var user = yield userFormRequest.insert(userromRequest);

	this.body = user;
	this.set("location", "/user/" + user._id);
	this.status = 201
}

app.keys = ['im a newer secret', 'i like turtle'];
app.context.user = 'user name';
app.context.db = '';

// app.on('error', err => {
// 	console.log.error('server error', err)
// });

app.use(async (ctx) => {
	let data = await mysql.query()
	ctx.body = ctx.user

})

app.listen(config.port)
console.log(`listening on port ${config.port}`);