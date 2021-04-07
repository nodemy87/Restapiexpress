var mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'reatapinode'
});

conn.connect(function(err) {
    if (err) throw err;
    console.log("connected");

});

module.exports = conn;