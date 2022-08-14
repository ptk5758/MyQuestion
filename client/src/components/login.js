import React, { useEffect, useState } from "react";
import axios from 'axios';
import qs from 'qs';

const ls = window.localStorage;

function LoginComponent(props)
{    
    const kakao = require('../kakao');
    const [userId, setUserId] = useState("");
    const [userPass, setUserPass] = useState("");

    const loginSubmit = () => {
        sendUserInfo()
        .then(res=>{
            if(res.data.msg == '로그인 성공'){
                localStorage.setItem("userId", userId);
                console.log(localStorage.getItem("userId"));
                alert("환영합니다");
                window.location.href="/";
            }else{
                alert("로그인에 실패하였습니다.");
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
                    <button onClick={() => {loginSubmit()}}>로그인</button>
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
                <div><a href={"/regist"}>회원가입</a></div>
            </div>
        </div>
    );
}

function RegistComponent(props)
{
    useEffect(()=>{
        
    }, []);

    const [userId, setUserId] = useState("");
    const [userPass, setUserPass] = useState("");
    const [userName, setUserName] = useState("");

    const registSubmit = () => {        
        // 회원가입 전채적인 로직
        sendUser()
        .then(res=> {console.log(res);});
    }

    const sendUser = () => {
        // 회원가입시 백엔드 서버로 통신할 함수

        return axios({
            method : "POST",
            url : "http://localhost:5000/member/regist",
            data : qs.stringify({
                userId : userId,
                userPass : userPass,
                userName : userName
            })
        });
    }

    return (
        <div className="regist">
            <div className="regist-form">
                <div className="regist-item">                
                    <label>• 아이디</label>
                    <input placeholder="아이디" value={userId} onChange={(e)=>{setUserId(e.target.value)}}/>
                </div>
                <div className="regist-item">                
                    <label>• 비밀번호</label>
                    <input placeholder="비밀번호" value={userPass} onChange={(e)=>{setUserPass(e.target.value)}}/>
                </div>
                <div className="regist-item">                
                    <label>• 닉네임</label>
                    <input placeholder="닉네임" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
                </div>
            </div>
            <div className="regist-btn">                
                <button onClick={registSubmit}>회원가입</button>
            </div>
        </div>
        );
}

function LoginSucComponent(props)
{
    const [userName, setUserName] = useState("");
    const userId = localStorage.getItem("userId");

    const userLogOut = () => {
        localStorage.removeItem("userId");
        window.location.href="/";
    }

    useEffect(() => {
        setName();
    })

    const setName = () => {
        getName()
        .then(res => {
            setUserName(res.data[0].name);
            console.log(res.data[0].name);
        });
    }

    const getName = () => {
        const url = "http://localhost:5000/member/name";
        const data = {
            userId: userId
        }
        return axios.post(url, qs.stringify(data));
    }

    return(
        <div className="uid_item">
            <div className="user_title">
                <span className="user_id">{userName}</span>
                <span className="user_print"> 님 환영합니다.</span>
            </div>
            <div className="user_info">
                <span className="question_count">등록한 문제 : </span>
                <span className="book_count">등록한 문제집 : </span>
            </div>
            <div className="user_logout_btn">
                <button className="logout_btn" onClick={userLogOut}>로그아웃</button>
            </div>
        </div>
    );
}

function LoginItemComponenet(props)
{
    return window.localStorage.getItem("userId") ? <LoginSucComponent/> : <LoginComponent/>;
}

function LoginHeader(props)
{
    return window.localStorage.getItem("userId") ? "내정보" : "로그인";
}

export { LoginComponent, RegistComponent, LoginSucComponent, LoginItemComponenet, LoginHeader }; 