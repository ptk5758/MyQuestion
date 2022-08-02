import React, { useEffect } from "react";
import queryStirng from "query-string";
import axios from "axios";
function KakaoCallback()
{
    // Query String 읽어오기
    const params = queryStirng.parse(window.location.search);

    // 기타 API요청에 필요한것들
    const code = params.code;
    const kakao = require('../kakao');
    const qs = require('qs');

    // 토큰 가져오기 API
    const getToken = async () => {
        return axios({
            method : "POST",
            url : "https://kauth.kakao.com/oauth/token",
            headers : {
                "Content-Type" : "application/x-www-form-urlencoded;charset=utf-8"
            },
            data : qs.stringify({
                grant_type : "authorization_code",
                client_id : kakao.clientID,
                redirect_uri : kakao.redirectUri,
                code : code
            })

        });
    }
    
    useEffect(()=>{
        getToken()
        .then(token => console.log(token));
    }, []); // 이유는 모르겠지만  [ ] 안에 넣어줘야함
    
    return (<div>카카오 콜백</div>);
}

export default KakaoCallback;