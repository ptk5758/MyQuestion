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
      ] 
    }
  }

  componentDidMount()
  {
    let params = queryString.parse(window.location.search);
    fetch("http://localhost:5000/question/"+params.uid)
    .then(res => res.json())
    .then(json =>{   
      this.setState({
        questions : json
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
                    return <span className='this-answer'>{item.datetime}</span>
                  })}
                </div>
                <div className='answer-title'>
                  • 답 : &nbsp;
                  
                </div>
            </div>
        );
    }
}

export { QuestionView } ;