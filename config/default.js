const config = {
    // Start port
    port: 3000,

    // Database configuration
    database: {
        DATABASE: 'test',
        USERNAME: 'adam',
        PASSWORD: '01030',
        HOST: 'localhost'
    }
}

module.exports = config

// var mysql = require('mysql');

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "adam",
//     password: "01030",
//     database: 'test',
//     insecureAuth: true
// });



// con.connect(err => {
//     if (err) {
//         throw err;
//     }
//     console.log('mysql connected');
// });