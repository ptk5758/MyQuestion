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
                isLogin: false
            }
        }        
        
    }

    componentDidMount()
    {
        const ls = window.localStorage;
        if(ls.getItem("sessionId") !== null)
        {
            const user = {
                isLogin : true,
                sessionId : ls.getItem("sessionId")
            }
            this.setState({user: user})
        }
        else 
        {
            const user = {
                isLogin : false
            }
            this.setState({user: user})
        }
    }

    setUser(obj)
    {
        this.setState({user: obj});        
    }
    render()
    {
        let modal_element = <div className='box-right' onClick={()=>{this.props.openModal(<LoginComponent setUser={this.setUser.bind(this)}/>, "로그인");}}><img src={profile} /></div>;
        if(this.state.user.isLogin !== undefined && this.state.user.isLogin == true)
        {
            modal_element = <div className='box-right' onClick={()=>{this.props.openModal(<Info/>, "내정보");}}><img src={profile} /></div>;
        }        
        return(
            <div className={this.props.useHeader ? "header" : "header off"}>
                <div className='box-left'><img src={left_arrow}/></div>
                <div className='title'>
                    <span>문제집</span>
                </div>
                { modal_element }
            </div>
        );
    }
}
export default Header;