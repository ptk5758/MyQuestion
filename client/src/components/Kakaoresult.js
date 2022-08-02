import React, { useEffect } from "react";
import queryStirng from "query-string";
import axios from "axios";
//axios.defaults.withCredentials = true; // session 유지를 위한 어쩌구
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
                "Content-Type" : "application/x-www-form-urlencoded;charset=utf-8",                
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
        .then(res => {
            if(res.status === 200)
            {
                console.log(res.data);
                const access_token = res.data.access_token;
                const refresh_token = res.data.refresh_token;
                axios({
                    method : "POST",
                    url : "http://localhost:5000/kakao/token",
                    data : qs.stringify({
                        access_token : access_token
                    }),
                    withCredentials : true
                })
                .then(res2 => {
                    axios({
                        method : "GET",
                        url : "http://localhost:5000/kakao/user",
                        withCredentials : true
                    })
                    .then(res3 => {
                        console.log(res3);
                    });
                });
            }
        })
        .catch(err => console.log(err));
    }, [code]); // 이유는 모르겠지만  [ ] 안에 넣어줘야함
    
    return (<div>카카오 콜백</div>);
}

export default KakaoCallback;