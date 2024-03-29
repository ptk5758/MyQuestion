const conn = require('./conn');

const router = require('express').Router();

router.get("/", (req, res) => {
    res.setHeader('Access-Control-Allow-origin', '*');  
    let q = "select * from question"
    conn.query(q, (error, rows, field) => {
        if(error)
            console.log(error);
        res.send(rows);
    });
});

router.get("/:uid", (req, res) =>{
    res.setHeader('Access-Control-Allow-origin', '*');  
    let uid = req.params.uid;
    let q = "select * from question where uid like " + uid;    
    conn.query(q, (error, rows, fields) => {
        if(error)
            console.log(error);        
        if(rows[0] !== undefined)
        {
            let query = `SELECT * FROM answers WHERE parent = ${uid}`;
            conn.query(query, (_err, _rows) => {
                if (_err) console.log(_err);                                
                rows[0].answers = _rows;
                res.send(rows[0]);
            });
        }
        else
        {
            res.send({code : 0, msg : "Error"});
        }        
    });
});

router.get("/:uid/answer", (req, res) =>{
    res.setHeader('Access-Control-Allow-origin', '*');      
    let uid = req.params.uid;
    let q = "select answer from answers as a, question as q where a.parent=q.uid and q.uid=" + uid;
    conn.query(q, (error, rows, fields) => {
        if(error)
            console.log(error);
        res.send(rows);
    });
});

router.delete("/:uid/answer", (req, res) => {    
    let q = "delete from answers where parent=" + req.params.uid;
    conn.query(q, (err, row) =>{
        if(err)
            console.log(err);
        res.send(row);
    })
})

router.delete("/:uid", (req, res) => {
    res.setHeader('Access-Control-Allow-origin', '*');     
    let q = "delete from question where uid=" + req.params.uid;
    conn.query(q, (err, row) => {
        if(err)
            console.log(err);
        res.send(row);
    });
});

router.post("/", (req, res) => {
    res.setHeader('Access-Control-Allow-origin', '*');
    let query = `insert into question (question, mode, datetime) values ("${req.body.subject}", ${req.body.type}, now())`;
    conn.query(query, (err, row, fields)=>{        
        let uid = row.insertId;
        let answers = req.body.answers;
        answers.map(obj =>{
            let answer = obj.isAnswer === "true" ? 1 : 0;
            let answer_query = `insert into answers (parent, answer, isAnswer) VALUES (${uid}, "${obj.question}", ${answer})`;            
            conn.query(answer_query, (err, _row) => {
                if(err)
                    console.log(err);
                row.answers = _row;
            });
        });
        res.send(row);
    });
});

router.post("/solve/:uid", (req, res)=>{
    const { uid } = req.params;
    const { state } = req.body;
    
    const query = `INSERT INTO solve (state, parent, datetime) VALUES (${state}, ${uid}, now())`;
    conn.query(query, (err,row)=>{
        if(err)
        {
            console.log(err);
        }
        res.send(row);
    });
});


module.exports = router;