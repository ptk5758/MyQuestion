import axios from "axios";
import { Component } from "react";
import { QuestionLatest } from './Question';
import { QuestionBookLatest } from './QuestionBook';
class Main extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            questions: [
                {
                    uid: 0,
                    question: ""
                }
            ],
            subjects: [
                {
                    uid:0,
                    subject: ""
                }
            ]
        }
    }

    componentDidMount()
    {
        Promise.all([fetch('http://localhost:5000/question')
        .then(res1=>res1.json()),
        fetch('http://localhost:5000/book')
        .then(res2=>res2.json())])
        .then(([res1, res2]) => {
          this.setState({
            questions: res1,
            subjects: res2
          });
        });
    }

    render()
    {
        return(
            <div className="main">
                <article>
                    <div className="title">
                        <span className="text">나의 문제</span>
                        <span className="more" onClick={() => {window.location.href='/question'}}>더보기</span>
                    </div>
                    <QuestionLatest questions={this.state.questions}/>
                </article>

                <article>
                    <div className="title">
                        <span className="text">문제집</span>
                        <span className="more" onClick={() => {window.location.href='questionbook'}}>더보기</span>
                    </div>
                    <QuestionBookLatest subjects={this.state.subjects}/>
                </article>
            </div>
        );
    }
}
export default Main;