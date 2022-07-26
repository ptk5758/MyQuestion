const router = require('express').Router();

router.get("/login", (req,res)=>{    
    console.log(req.session);
    if(req.session.number === undefined)
    {
        req.session.number = 1;        
    }
    else
    {
        req.session.number++;
    }
    res.send(`number => ` + req.session.number);
});

router.post("/login", (req,res) => {
    const {userId, userPass} = req.body;
    console.log("userId => " + userId);
    console.log("userPass => " + userPass);    
    console.log(req.session);
    res.send("Hello Login");
});

module.exports = router;