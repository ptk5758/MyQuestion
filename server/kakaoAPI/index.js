const router = require('express').Router();
const axios = require('axios');
router.post("/token", (req,res)=>{
    const token = req.body.access_token;
    req.session.access_token = token;        
    res.send("GOOD");
});

router.get("/user", (req,res)=>{        
    axios({
        method : 'POST',
        url : 'https://kapi.kakao.com/v2/user/me',
        headers : {
            "Authorization" : `Bearer ${req.session.access_token}`
        }
    })
    .then(response => {        
        const user = response.data;
        res.send(user);
    })
    .catch(err => res.send(err));
});

module.exports = router;