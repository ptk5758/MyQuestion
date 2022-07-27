const router = require('express').Router();

router.get("/", (req, res) => {
    res.setHeader('Access-Control-Allow-origin', '*');  
    const conn = require('./conn');
    let q = "select * from question"
    conn.query(q, (error, rows, field) => {
        if(error)
            console.log(error);
        res.send(rows);
    });
});

router.get("/:uid", (req, res) =>{
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

router.get("/:uid/answer", (req, res) =>{
    res.setHeader('Access-Control-Allow-origin', '*');  
    const conn = require('./conn');
    let uid = req.params.uid;
    let q = "select answer from answers as a, question as q where a.parent=q.uid and q.uid=" + uid;
    conn.query(q, (error, rows, fields) => {
        if(error)
            console.log(error);
        res.send(rows);
    });
});

router.delete("/", (req, res) => {
    res.setHeader('Access-Control-Allow-origin', '*'); 
    const conn = require('./conn');
    let q = "delete from question where uid=" + req.body.uid;
    conn.query(q, (err, row) => {
        if(err)
            console.log(err);
        res.send(row);
    })
})

router.post("/", (req, res) => {
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


module.exports = router;