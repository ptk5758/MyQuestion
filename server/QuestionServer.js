const fs = require('fs');
const df = fs.readFileSync('./database.json');
const database = JSON.parse(df);

let express = require("express");
let mysql = require("mysql");
let conn = mysql.createConnection({
    host: database.host,
    user: database.user,
    password: database.password,
    database: database.database,
    port: database.port
});

conn.connect();

let app = express();

app.get("/", (req, res) => {
    let q = "select * from question"
    conn.query(q, (error, rows, field) => {
        if(error)
            console.log(error);
        res.send(rows)
    });
});

app.listen(5000, () =>{
    console.log('5000번 포트로 서버가 열림');
});