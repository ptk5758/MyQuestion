import { Component } from "react";
import left_arrow from '../source/left-arrow.svg';
import profile from '../source/profile.svg';
import { LoginComponent } from "./login";
import { LoginSucComponent} from "./login";
import {LoginItemComponenet} from "./login";
import {LoginHeader} from "./login";
import {useNavigate} from 'react-router-dom';

function Header(props)
{
    let navigate = useNavigate();

        //this.props.setHeader(true);
        return(
            <div className={props.useHeader ? "header" : "header off"}>
                <div className='box-left'><img src={left_arrow} onClick={() => {navigate(-1);}}/></div>
                <div className='title'>
                    <span>문제집</span>
                </div>
                <div className='box-right' onClick={()=>{props.openModal(<LoginItemComponenet/>, <LoginHeader/>);}}><img src={profile} /></div>
            </div>
        );
}

export default Header;