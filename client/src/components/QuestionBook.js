import { Component } from 'react';
import plus from '../source/plus.svg';

class QuestionBook extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            books: [
                {
                    uid: 0,
                    subject: "qqq"
                }
            ]
        }
    }
    componentDidMount()
    {
        fetch("http://localhost:5000/book")
        .then(res => res.json())
        .then(json =>{
            this.setState({
                books : json
            });
        });
    }
  render()
  {
    return(
        <div className='questionbook'>
            {this.state.books.map((bookname, index) => {
                return (
                    <div className='item-box'>
                        <span className='book' key={index}>{bookname.subject}</span>
                    </div>
                );
            })}
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
