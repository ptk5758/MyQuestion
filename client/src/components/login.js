import React, { useEffect } from "react";

function LoginComponent(props)
{    
    useEffect(()=>{
        //props.setHeader(false);
    },[]);
    return (
        <div className="login-modal">
            <div>
                <div>
                    <label><input/></label>
                </div>
                <div>
                    <label><input/></label>
                </div>
                <div>
                    <button>로그인</button>
                </div>
            </div>
        </div>
    );
}

export { LoginComponent }; 