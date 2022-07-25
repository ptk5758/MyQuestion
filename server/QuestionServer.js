let express = require("express");
let app = express();
const bodyParser = require('body-parser');
// app.use(function(req,res,next){ //미들웨어 원리
//     app.test = "asd";    
//     next();
// });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.setHeader('Access-Control-Allow-origin', '*');  
    res.send("Hello World");
});


// 문제 API Router
const question = require('./question');
app.use("/question", question);

// 문제집 API Router
const book = require('./book');
app.use("/book", book);


app.listen(5000, () =>{console.log('5000번 포트로 서버가 열림');});

// 기본 서버는 자기 자신의 IP 에만 통신을 허용해
// 서버의 아이피는 localhost:5000
// 클라이언트의 아이피는 localhost:3000
// localhost:3000 의 IP 가 서버의 요청 => 등록되지 않은 IP 빠꾸 (CORS) 
// 그렇다면 모튼 IP를 허용해주자 ! res.setHeader('Access-Control-Allow-origin', '*')