import React, { Component } from 'react';
import queryString from 'query-string';

// function QuestionView()
// {    
//     return <div>test입니다</div>;
// }    
class QuestionView extends Component
{
    constructor(props)
  {
    
    super(props);

    this.state = {
      questions: [
        {
          uid: 0,
          question: ""
        }
      ],
      answers: [
        {
          uid: 0,
          answer: ""
        }
      ]
    }
  }

  componentDidMount()
  {
    let params = queryString.parse(window.location.search);
    Promise.all([fetch('http://localhost:5000/question/'+params.uid)
    .then(res1=>res1.json()),
    fetch('http://localhost:5000/question/'+params.uid+'/answer')
    .then(res2=>res2.json())])
    .then(([res1, res2]) => {
      this.setState({
        questions: res1,
        answers: res2
      });
    });
  }

    render()
    {
        return(
            <div className="question-title">
                • 문제 : &nbsp;
                {this.state.questions.map((item) => {
                  return <span className='this-question'>{item.question}</span>
                })}
                <div className="regist-title">
                  • 등록시간 : &nbsp;
                  {this.state.questions.map((item) => {
                    return <span className='this-time'>{item.datetime}</span>
                  })}
                </div>
                <div className='answer-title'>
                  • 답 &nbsp;
                  {this.state.answers.map((item) => {
                    return <span className='this.answer'>{item.answer} &nbsp;</span>
                  })}
                </div>
                <div className='deleteModifyBtn'>
                  <span className='deleteBtn'>삭제</span>
                  <span className='modifyBtn'>수정</span>
                </div>
            </div>
        );
    }
}

export { QuestionView } ;