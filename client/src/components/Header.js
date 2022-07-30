import { Component } from "react";
import left_arrow from '../source/left-arrow.svg';
import profile from '../source/profile.svg';
import { LoginComponent } from "./login";
import { Info } from "./Info";
class Header extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            user : {

            }            
        }
    }
    setUser(obj)
    {
        this.setState({user: obj});        
    }
    render()
    {
        console.log(this.state.user);
        //this.props.setHeader(true);
        return(
            <div className={this.props.useHeader ? "header" : "header off"}>
                <div className='box-left'><img src={left_arrow}/></div>
                <div className='title'>
                    <span>문제집</span>
                </div>
                <div className='box-right' onClick={()=>{this.props.openModal(<LoginComponent setUser={this.setUser.bind(this)}/>, "로그인");}}><img src={profile} /></div>
            </div>
        );
    }
}
export default Header;