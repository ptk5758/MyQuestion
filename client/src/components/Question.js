import { Component } from 'react';

class Question extends Component
{
  render()
  {
    return(
      <div className='question'>
        <div className='title'>
          <span>&lt;</span>
          <span>문제</span>
        </div>
        <hr/>
        <div className='question_list'>
          <p>사과의 스펠링으로 옳은 것은?</p>
          <hr/>
          <p>사과의 스펠링으로 옳은 것은?</p>
          <hr/>
          <p>사과의 스펠링으로 옳은 것은?</p>
          <hr/>
          <p>사과의 스펠링으로 옳은 것은?</p>
          <hr/>
          <p>사과의 스펠링으로 옳은 것은?</p>
          <hr/>
          <p>사과의 스펠링으로 옳은 것은?</p>
          <hr/>
        </div>
        
        <div className='button'>
          <button className='regist_button'>등록하기</button>
        </div>
      </div>
    );
  }  
}

export default Question;
