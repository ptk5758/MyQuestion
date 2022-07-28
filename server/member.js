const conn = require('./conn');

const router = require('express').Router();

const developer = {
    userId : "dev",
    userPass : "1234",
    nickName : "developer"
}

router.get("/login", (req,res)=>{        
    res.send("대충 로그인페이지 ");
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

module.exports = router;