const conn = require('./conn');

const router = require('express').Router();

const developer = {
    userId : "dev",
    userPass : "1234",
    nickName : "developer"
}

router.get("/login", (req,res)=>{        
    let sql = `select * from member`;
    conn.query(sql, (err, rows) => {
        if(err)
        {
            console.log(err);
        }
        res.send(rows);
    })
});

router.post("/login", (req,res) => {
    const result = {
        code    : 1,
        msg     : "로그인 성공"
    }
    const { userId, userPass } = req.body;

    let sql = `SELECT count(*) as count FROM member WHERE id="${userId}" AND pass="${userPass}"`;
    conn.query(sql, (err, rows)=>{
        if(err)
        {
            console.log(err);
        }
        if(rows[0].count)
        {
            result.user = {
                userId : userId
            }
        }
        else
        {
            result.msg = "로그인 실패";
            result.code = 0;
        }
        res.send(result);
    });
});

router.post("/name", (req, res) => {
    const {userId} = req.body;
    let sql = `select name from member where id="${userId}"`;
    conn.query(sql, (error, row) => {
        if(error)
            console.log(error);
        res.send(row);
    });
});

router.post("/regist", (req,res) => {
    const { userId, userPass, userName } = req.body;
    const query = `INSERT INTO member (id, pass, name) VALUES ("${userId}", "${userPass}", "${userName}")`;
    conn.query(query, (err, rows) => {
        if(err)
        {
            console.log(err);
        }
        res.send(rows);
    });    
    
});


router.get("/isUser", (req,res) => {
    //const { userId } = req.body;
    const userId = req.query.userid;
    const query = `SELECT count(id) as cnt FROM member WHERE id = '${userId}'`;
    //console.log(query);
    conn.query(query, (err,rows) => {
        if(err)
        {
            console.log(err);
        }
        res.send(rows[0]);
    });
});
module.exports = router;