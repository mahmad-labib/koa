const koa = require("koa")
const bcrypt = require('bcrypt');
const path = require("path");

const app = new koa()

//mysql
const config = require('./config/default')
const mysql = require('./mysql')
const auth = require('./auth')
//passport 




app.context.user = 'im the user';
app.context.db = mysql;
app.context.bcrypt = bcrypt;
app.context.passport = auth;

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