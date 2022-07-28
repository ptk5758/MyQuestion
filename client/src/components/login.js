import React, { useEffect } from "react";

function LoginComponent(props)
{    
    useEffect(()=>{
        //props.setHeader(false);
    },[]);
    return (
        <div className="login-modal">
            <div className="login-form">
                <div className="login-item">
                    <label><input/></label>
                </div>
                <div className="login-item">
                    <label><input/></label>
                </div>
                <div className="login-item">
                    <button>로그인</button>
                </div>
            </div>
            <div className="simple-login">
                <div>
                    <span>간편로그인</span>
                </div>
                <div className="icon-group">
                    <a>N</a>
                    <a>G</a>
                    <a>K</a>                    
                </div>
            </div>
        </div>
    );
}

export { LoginComponent }; 