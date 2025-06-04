const mysql = require('mysql2/promise');

const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'rohit',
    database: 'ecom_db'
});

module.exports = mysqlPool;