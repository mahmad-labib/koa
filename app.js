const koa = require("koa")
const app = new koa();

var _ = require("koa-route");
var parse = require("co-body");

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

app.use(_.post("/user", saveUser));
// app.use(_.get("/user/:id", getUser));

function* saveUser() {
	var userFormRequest = yield parse(this);
	var user = yield userFormRequest.insert(userromRequest);

	this.body = user;
	this.set("location", "/user/" + user._id);
	this.status = 201
}

app.use(async (ctx) => {
	ctx.body = "Hello World!";
});

app.listen(3000);
console.log("The app is listening. Port 3000");