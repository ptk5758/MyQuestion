import { Component } from "react";
import left_arrow from '../source/left-arrow.svg';
import profile from '../source/profile.svg';
import { LoginComponent } from "./login";
class Header extends Component
{
    render()
    {
        //this.props.setHeader(true);
        return(
            <div className={this.props.useHeader ? "header" : "header off"}>
                <div className='box-left'><img src={left_arrow}/></div>
                <div className='title'>
                    <span>문제집</span>
                </div>
                <div className='box-right' onClick={()=>{this.props.openModal(<LoginComponent/>, "로그인");}}><img src={profile} /></div>
            </div>
        );
    }
}
export default Header;