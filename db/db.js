const mysql = require('mysql');
//另一种方式
//import mysql from 'mysql';
const conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'1234',
    database:'sangenluobo',
});
conn.connect();



module.exports = conn;