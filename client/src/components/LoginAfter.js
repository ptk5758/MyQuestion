import React, { useEffect } from "react";
import axios from 'axios';

function LoginAfter()
{
    useEffect(()=>{

        axios({
             method: 'POST',
             url : "http://localhost:5000/member/loginafter",
        })
        .then(res=>{console.log(res);});

    },[]);

    return(
        <div>
            로그인후
        </div>
    );
}

export default LoginAfter;