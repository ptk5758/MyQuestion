import { Component } from 'react';

class Question extends Component
{
  render()
  {
    return(
      <div className='question_main' >
        <div className='question_list'>
          <p className='question'>사과의 스펠링으로 옳은 것은?</p>

          <p className='question'>사과의 스펠링으로 옳은 것은?</p>

          <p className='question'>사과의 스펠링으로 옳은 것은?</p>

          <p className='question'>사과의 스펠링으로 옳은 것은?</p>

          <p className='question'>사과의 스펠링으로 옳은 것은?</p>
          
          <p className='question'>사과의 스펠링으로 옳은 것은?</p>
        </div>
        
        <div className='btn'>
          <button className='regist_btn'>등록하기</button>
        </div>
      </div>
    );
  }  
}

export default Question;