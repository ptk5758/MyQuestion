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
class QuestionLatest extends Component
{
  render()
  {
    return(
      <div className="question-list">
        <QuestionItem/>
        <QuestionItem/>
        <QuestionItem/>
        <QuestionItem/>
      </div>
    )
  }
}
class QuestionItem extends Component
{
  render()
  {
    return(
        <div className="item">
            <span className="question-subject">사과의 스펠링은?</span>
            <span className="question-tag">TAG</span>
        </div>
    )
  }
}
export { Question, QuestionLatest, QuestionItem };
