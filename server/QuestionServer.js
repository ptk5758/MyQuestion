let express = require("express");
let app = express();

app.get("/", (req, res) => {
    res.send("hello world my server")
});

app.listen(5000, () =>{
    console.log('5000번 포트로 서버가 열림');
});