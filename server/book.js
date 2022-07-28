const router = require('express').Router();
router.get("/", (req, res)=>{
    res.setHeader('Access-Control-Allow-origin', '*');  
    const conn = require('./conn');
        
    let q = "select * from book";
    conn.query(q, (error, rows, field) => {
        if(error)
            console.log(error);
        res.send(rows)
    });
});
router.post("/", (req, res) => {
    res.setHeader('Access-Control-Allow-origin', '*');    
    const conn = require('./conn');
    
    let str = "";
    for(let i=0; i<req.body.questions.length; i++)
    {
        str += req.body.questions[i].uid;
        if(i+1 != req.body.questions.length)
        {
            str += ",";
        }
    }
    let query = `INSERT INTO book (subject, questions, datetime) VALUES ("${req.body.subject}", "${str}", now())`;
    conn.query(query, (err,rows) => {
        if(err)
        {
            console.log(err);
        } 
        res.send(rows);
    });    
});

module.exports = router;