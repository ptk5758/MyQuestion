const bodyParser = require('body-parser');
let express = require("express");
let app = express();
app.use(function(req,res,next){
    app.test = "asd";    
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.setHeader('Access-Control-Allow-origin', '*');  
    res.send("Hello World");
});

app.get("/question", (req, res) => {
    res.setHeader('Access-Control-Allow-origin', '*');  
    const conn = require('./conn');
    let q = "select * from question"
    conn.query(q, (error, rows, field) => {
        if(error)
            console.log(error);
        res.send(rows);
    });
});

app.get("/question/:uid", (req, res) =>{
    res.setHeader('Access-Control-Allow-origin', '*');  
    const conn = require('./conn');
    let uid = req.params.uid;
    let q = "select * from question where uid like " + uid;
    conn.query(q, (error, rows, fields) => {
        if(error)
            console.log(error);
        res.send(rows);
    });
});

app.post("/question", (req, res) => {
    res.setHeader('Access-Control-Allow-origin', '*');
    const conn = require('./conn');
    let query = `insert into question (question, mode, datetime) values ("${req.body.subject}", ${req.body.type}, now())`;
    conn.query(query, (err, row, fields)=>{        
        let uid = row.insertId;
        let answers = req.body.answers;
        answers.map(obj =>{
            let answer = obj.isAnswer === "true" ? 1 : 0;
            let answer_query = `insert into answers (question, answer, isAnswer) VALUES (${uid}, "${obj.question}", ${answer})`;
            conn.query(answer_query, (err, _row) => {
                if(err)
                    console.log(err);
                row.answers = _row;
            });
        });
        res.send(row);
    });
});

const book = require('./book');
app.use("/book", book);



app.listen(5000, () =>{console.log('5000번 포트로 서버가 열림');});

// 기본 서버는 자기 자신의 IP 에만 통신을 허용해
// 서버의 아이피는 localhost:5000
// 클라이언트의 아이피는 localhost:3000
// localhost:3000 의 IP 가 서버의 요청 => 등록되지 않은 IP 빠꾸 (CORS) 
// 그렇다면 모튼 IP를 허용해주자 ! res.setHeader('Access-Control-Allow-origin', '*')