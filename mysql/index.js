var mysql = require('mysql');
var config = require('../config/default.js')

var db  = mysql.createConnection({
  host     : config.database.HOST,
  user     : config.database.USERNAME,
  password : config.database.PASSWORD,
  database : config.database.DATABASE
});

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

class Mysql {
    constructor () {

    }
    query () {
      return new Promise((resolve, reject) => {
        db.query('SELECT * from authors', function (error, results, fields) {
            if (error) {
                throw error
            };
            resolve(results)
            // console.log('The solution is: ', results[0].solution);
        });
      })
       
    }
}

module.exports = db