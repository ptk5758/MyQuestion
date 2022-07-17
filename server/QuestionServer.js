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
    res.setHeader('Access-Control-Allow-origin', '*');  
    
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

// 기본 서버는 자기 자신의 IP 에만 통신을 허용해
// 서버의 아이피는 localhost:5000
// 클라이언트의 아이피는 localhost:3000
// localhost:3000 의 IP 가 서버의 요청 => 등록되지 않은 IP 빠꾸 (CORS) 
// 그렇다면 모튼 IP를 허용해주자 ! res.setHeader('Access-Control-Allow-origin', '*')