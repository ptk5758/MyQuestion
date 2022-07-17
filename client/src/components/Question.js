import { Component } from 'react';

class Question extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {

    }
  }
  componentDidMount()
  {
    fetch("http://localhost:5000")
    .then(res => res.json())
    .then(json =>{
      console.log(json);
    });
  }
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
        {this.props.questions.map((str, index) => {
          return <QuestionItem subject={str} key={index}/>
        })}
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
            <span className="question-subject">{this.props.subject}</span>
            <span className="question-tag">TAG</span>
        </div>
    )
  }
}
export { Question, QuestionLatest, QuestionItem };
