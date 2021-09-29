const koa = require("koa")
const path = require("path");

//mysql
const config = require('./config/default')
const mysql = require('./mysql')

const app = new koa()
app.context.user = 'im the user';
app.context.db = mysql;

//mysql creation routes 
// const {authors} = require('./create-db');

//routes
var {
	user,
	home
} = require('./api');



//router middleware
app.use(user.routes())
	.use(home.routes())



app.listen(config.port)
console.log(`listening on port ${config.port}`);