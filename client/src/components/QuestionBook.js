import { Component } from 'react';
import plus from '../source/plus.svg';

class QuestionBook extends Component
{
  render()
  {
    return(
        <div className='questionbook'>
            <div className='item-box'>
                <span className='book'>대충 책제목</span>
            </div>
            <div className='item-box'>
                <span className='book'>대충 책제목</span>
            </div>
            <div className='item-box'>
                <span className='book'>대충 책제목</span>
            </div>
            <div className='item-box'>
                <span className='book'>대충 책제목</span>
            </div>
            <div className='item-box'>
                <span className='book'>대충 책제목</span>
            </div>
            <div className='item-box'>
                <span className='plus-book'>
                    <img src={plus}/>                        
                </span>
            </div>
        </div>
    );
  }  
}
class QuestionBookLatest extends Component
{
    render()
  {
    return(
        <div className="question-list">
            <QuestionBookItem/>
            <QuestionBookItem/>
            <QuestionBookItem/>
            <QuestionBookItem/>
        </div>
    );
  }
}

class QuestionBookItem extends Component
{
    render()
  {
    return(
        <div className="item">
            <span className="question-subject">사과의 스펠링은?</span>
        </div>
    );
  }
}

export { QuestionBook, QuestionBookLatest };
