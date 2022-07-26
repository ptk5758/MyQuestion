import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function Developer()
{
    const [userId, setUserId]  = useState();
    const [userPass, setUserPass]  = useState();
    const submitFunc = () => {
        const qs = require('qs');
        const data = {
            userId : userId,
            userPass : userPass
        }
        const url = "http://localhost:5000/member/login";
        axios.post(url, qs.stringify(data))
        .then(res => {console.log(res)});
    }
    return (
        <div>
            <label>ID : <input value={userId ? userId : ""} onChange={(e)=>{setUserId(e.target.value)}}/></label>
            <br></br>
            <label>PASS : <input value={userPass ? userPass : ""} onChange={(e)=>{setUserPass(e.target.value)}}/></label>
            <br></br>
            <button onClick={submitFunc}>LOGIN</button>
        </div>
    );
}

export { Developer }