import React, { useEffect, useState } from "react";
import axios from 'axios';
import qs from 'qs';
function LoginComponent(props)
{    
    const kakao = require('../kakao');
    const [userId, setUserId] = useState("");
    const [userPass, setUserPass] = useState("");
    console.log(kakao);

    const loginSubmit = () => {
        sendUserInfo()
        .then(res=>{console.log(res);});
    }

    const sendUserInfo = () => {        
        const url = "http://localhost:5000/member/login";
        const data = {
            userId: userId,
            userPass: userPass
        }
        return axios.post(url, qs.stringify(data));
    }


    useEffect(()=>{
        //props.setHeader(false);
    },[]);
    return (
        <div className="login-modal">
            <div className="login-form">
                <div className="login-item">
                    <label><input value={userId} onChange={(e)=>{setUserId(e.target.value)}} /></label>
                </div>
                <div className="login-item">
                    <label><input value={userPass} onChange={(e)=>{setUserPass(e.target.value)}} /></label>
                </div>
                <div className="login-item">
                    <button onClick={loginSubmit}>로그인</button>
                </div>
            </div>
            <div className="simple-login">
                <div>
                    <span>간편로그인</span>
                </div>
                <div className="icon-group">
                    <a href={`https://kauth.kakao.com/oauth/authorize?client_id=${kakao.clientID}&redirect_uri=${kakao.redirectUri}&response_type=code&scope=profile_nickname,profile_image`}>네</a>
                    <a>구</a>
                    <a>카</a>                    
                </div>
            </div>
            <div className="login-option">
                <div><a>아이디 찾기</a></div>
                <div><a>회원가입</a></div>
            </div>
        </div>
    );
}

export { LoginComponent }; 