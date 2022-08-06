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

router.get("/:uid", (req, res) => {
    res.setHeader('Access-Control-Allow-origin', '*');  
    const conn = require('./conn');

    let uid = req.params.uid;
    let q = `select * from book where uid=${uid}`;
    conn.query(q, (error, rows, field) => {
        if(error)
            console.log(error);
        if(rows[0] !== undefined)
        {
            let questions = rows[0].questions;
            let arr = questions.split(",");
            let query = `SELECT * FROM question WHERE 1=1 `;
            for(let i=0; i<arr.length; i++)
            {                
                if(i == 0)
                {
                    query += `AND uid = ${arr[i]} `;
                }
                else 
                {
                    query += `OR uid = ${arr[i]} `;
                }
            }
            conn.query(query, (err2,rows2)=>{
                if(err2)
                {
                    console.log(err2);
                }                
                rows[0].questions = rows2;
                res.send(rows[0]);
            });
        }
        else
        {
            res.send({code: 0, msg : "err"});
        }
        
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