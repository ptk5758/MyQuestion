import React from "react";

function Info()
{
    return(
        <div>
            <button onClick={()=>{
                window.localStorage.clear();
                window.location.href="/";
            }}>
                로그아웃
            </button>
        </div>
    );
}

export { Info };