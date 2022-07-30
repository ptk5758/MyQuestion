import React, { useEffect, useState } from "react";
import axios from 'axios';
import qs from 'qs';
function LoginComponent(props)
{    
    const [userId, setUserId] = useState("");
    const [userPass, setUserPass] = useState("");

    const ls = window.localStorage;

    const loginSubmit = () => {
        sendUserInfo()
        .then(res=>{
            console.log(res);
            if(res.status === 200)
            {
                if(res.data.code)
                {
                    const user = {
                        isLogin : true,
                        userId : res.data.user.userId
                    };                    
                    ls.setItem("isLogin" , true);
                    ls.setItem("sessionId", res.data.user.userId);
                    props.setUser(user);
                    
                }
                else
                {
                    alert("로그인에 실패하셧습니다.");
                }
            }
            else
            {
                console.log(res);
            }
            
        });
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
                    <a>네</a>
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