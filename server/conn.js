const fs = require('fs');
const df = fs.readFileSync('./database.json');
const database = JSON.parse(df);
const mysql = require("mysql");
const conn = mysql.createConnection({
    host: database.host,
    user: database.user,
    password: database.password,
    database: database.database,
    port: database.port
});

module.exports = conn;