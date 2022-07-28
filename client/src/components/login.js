import React, { useEffect } from "react";

function LoginComponent(props)
{    
    useEffect(()=>{
        props.setHeader(false);
    },[]);
    return (
        <div>로그인 페이지</div>
    );
}

export { LoginComponent }; 