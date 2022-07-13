import { Component } from 'react';
import left_arrow from '../source/left-arrow.svg';
class QuestionBook extends Component
{
  render()
  {
    return(
      <div className='content'>
        <div>
            <div className='header'>
                <div className='box-left'><img src={left_arrow}/></div>
                <div className='title'>
                    <span>문제집</span>
                </div>
                <div className='box-right'>&nbsp;</div>
            </div>
            <div className='questionbook'>
                <div className='book'>
                    <span>대충 책제목</span>
                </div>
                <div className='book'>
                    <span>대충 책제목</span>
                </div>
                <div className='book'>
                    <span>대충 책제목</span>
                </div>
                <div className='book'>
                    <span>대충 책제목</span>
                </div>
                <div className='book'>
                    <span>대충 책제목</span>
                </div>
                <div className='book'>
                    <span>대충 책제목</span>
                </div>
            </div>
        </div>
      </div>
    );
  }  
}

export default QuestionBook;
