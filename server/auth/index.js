// import axios from 'axios';
// import qs from 'qs';
const axios = require('axios');
const qs = require('qs');
const router = require('express').Router();
router.get("/kakao/callback", async (req,res) => {
    const code = req.query.code;
    const token = await axios({
        method : 'POST',
        url : 'https://kauth.kakao.com/oauth/token',
        headers:{
            'content-type':'application/x-www-form-urlencoded;charset=utf-8'
        },
        data : qs.stringify(
            {
                grant_type : "authorization_code",
                client_id : "018cce772cd5f89abf2008c46f96c5e9",
                redirect_uri : "http://localhost:5000/auth/kakao/callback",
                code : code
            }
        )
    });
    console.log(token);
    
    res.send("aaaa");
});

router.get("/token/callback", (req,res) => {
    console.log("asd");
    res.send("IDID");
});

module.exports = router;