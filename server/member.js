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
    if(userId === developer.userId && userPass === developer.userPass)
    {
        req.session.isLogin = true;
        req.session.userId = userId;
        req.session.nickName = developer.nickName;
        const user = {
            isLogin : true,
            userId : userId,
            nickName : developer.nickName
        };

        result.user = user;
    }
    else
    {
        result.code = 0;
        result.msg = "로그인 실패";
    }
    res.send(result);
});

module.exports = router;