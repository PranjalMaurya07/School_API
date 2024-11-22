const mysql = require('mysql2/promise');

const mysqlPool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : process.env.DB_PASSWORD,
    database : 'school_db'
})

module.exports = {
    mysqlPool,
}