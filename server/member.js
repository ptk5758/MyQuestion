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
        code : 200
    }
    const { userId, userPass } = req.body;
    if(userId === developer.userId && userPass === developer.userPass)
    {
        req.session.userId = userId;
        req.session.nickName = developer.nickName;        
        //res.redirect("/");
        result.msg = "성공";
    }
    else
    {
        result.msg = "실패";
        //console.log("실패");
    }
    res.send(result);
});

module.exports = router;