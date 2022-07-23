import { Component } from 'react';
import { Link } from 'react-router-dom';
class Question extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      questions: [
        {
          uid: 0,
          question: "asd"
        }
      ]
    }
  }
  componentDidMount()
  {
    fetch("http://localhost:5000/question")
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
      <div className='question_main' >
        <div className='question_list'>          
          {this.state.questions.map((item, index) => {
            console.log(item);
            return <Link to={/question/+item.uid}><p className='question' key={index}>{item.question}</p></Link>
          })}
        </div>
        
        <div className='btn'>
          <button className='regist_btn' onClick={()=>{window.location.href="/questioninsert"}}>등록하기</button>
        </div>
      </div>
    );
  }  
}



class QuestionLatest extends Component
{  
  render()
  {       
    let data = this.props.questions;     
    return(
      <div className="question-list">
        {data.map((str, index) => {
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
