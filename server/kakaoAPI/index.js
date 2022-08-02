const router = require('express').Router();
const axios = require('axios');
router.post("/token", (req,res)=>{
    const token = req.body.access_token;
    req.session.access_token = token;    
    console.log("1"+req.session.access_token);
    res.send("GOOD");
});

router.get("/user", (req,res)=>{    
    console.log("2"+req.session.access_token);
    axios({
        method: "GET",
        url : "http://kapi.kakao.com/v2/user/me",
        headers : {
            "Content-Type" : "application/x-www-form-urlencoded",
            "Authorization" : `Bearer ${req.session.access_token}`
        }
    })
    .then(response => {
        //console.log(response);
        res.send(response);
    })
    .catch(err => res.send(err));
});

module.exports = router;