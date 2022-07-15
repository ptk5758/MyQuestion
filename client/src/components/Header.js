import { Component } from "react";
import left_arrow from '../source/left-arrow.svg';
class Header extends Component
{
    render()
    {
        return(
            <div className='header'>
                <div className='box-left'><img src={left_arrow}/></div>
                <div className='title'>
                    <span>문제집</span>
                </div>
                <div className='box-right'>&nbsp;</div>
            </div>
        );
    }
}
export default Header;