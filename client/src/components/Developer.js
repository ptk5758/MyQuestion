import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
const ls = window.localStorage;

function Developer()
{    
    const [userId, setUserId]  = useState();
    const [userPass, setUserPass]  = useState();
    const [sessionId, setSessionId] = useState();
    
    useEffect(()=>{
        if(ls.getItem("isLogin"))
        {
            setSessionId(ls.getItem("sessionId"));
        }
    });

    const submitFunc = () => {
        const qs = require('qs');
        const data = {
            userId : userId,
            userPass : userPass
        }
        const url = "http://localhost:5000/member/login";
        axios.post(url, qs.stringify(data))
        .then(res => {
            if(res.data.code === 1)
            {                
                ls.setItem("isLogin", res.data.user.isLogin);
                ls.setItem("sessionId", res.data.user.userId);
                ls.setItem("sessionNickName", res.data.user.nickName);
                setSessionId(ls.getItem("sessionId"));
            }
            else
            {
                alert("로그인에 실패 하셧습니다.");
            }
        });
    }    

    const deleteTest = () => {
        const url = "http://localhost:5000/answer/21";
        axios.delete(url)
        .then(res=>{console.log(res);});        
    }
    
    return (
        <div>            
            <div>로그인 상태 : {sessionId ? sessionId+"님 어서오세요" : "로그인안되어있음"}</div>
            <label>ID : <input value={userId ? userId : ""} onChange={(e)=>{setUserId(e.target.value)}}/></label>
            <br></br>
            <label>PASS : <input value={userPass ? userPass : ""} onChange={(e)=>{setUserPass(e.target.value)}}/></label>
            <br></br>
            <button onClick={submitFunc}>LOGIN</button>
            <button onClick={()=>{
                setSessionId("");
                window.localStorage.clear();
                }}>LOOUT</button>

            <button onClick={deleteTest}>DELETE 테스트 버튼</button>
        </div>
    );
}

export { Developer }