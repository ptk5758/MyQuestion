import React from "react";
import { Component } from "react";
import axios from 'axios';
import queryString from 'query-string';

class QuestionInsert extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            type: 0,
            subject: "",
            questions: [
                {question : "", isAnswer: false}
            ],
        }
    }

    componentDidMount()
    {
        let params = queryString.parse(window.location.search);
        if(params.uid != undefined){
            this.setState({uid: params.uid});
            setTimeout(() => {console.log(this.state.uid)});
            //일단 보류 setTimeout(() => {this.loadQuestion()}, 500);
        }
    }

    //잘안됌 수정해보자(일단 보류)
    loadQuestion()
    {
        /*Promise.all([fetch('http://localhost:5000/question/'+this.uid)
        .then(res1=>console.log(res1.json())),
        fetch('http://localhost:5000/question/'+this.uid+'/answer')
        .then(res2=>console.log(res2.json()))])
        .then(([res1, res2]) => {
            this.setState({
                type: res1.mode,
                subject: res1.question,
                questions: res2
            });
        });*/

        //setTimeout(() => {console.log(this.state)}, 500);
        
        axios.get(`http://locahost:5000/question/${this.state.uid}`)
        .then(res=>{
            console.log(res);
            this.setState({type: res.mode, subject: res.question});
            axios.get(`http://localhost:5000/question/${this.state.uid}/answer`)
            .then(res2=>{
                this.setState({questions: res2.answer});
                console.log(this.state);
            });
        });
    }

    questionValueChange(event, index)
    {        
        let objs = this.state.questions.slice();
        objs[index].question = event.target.value;        
        this.setState({
            questions: objs
        });        
    }
    selectType(value)
    {
        this.setState({type: value});
    }
    addAnswer()
    {
        if(this.state.questions.length >= 10)
        {
            return;
        }
        this.setState({
            questions: [...this.state.questions, {question: "", isAnswer: false}]
        });
    }
    cancelAnswer(index)
    {   
        if(this.state.questions.length <= 1)
        {
            return;
        }
        let arr = [...this.state.questions];
        arr.splice(index,1);
        this.setState({
            questions: [...arr]
        });        
    }
    subjectChange(e)
    {
        this.setState({subject: e.target.value});        
    }
    toggleIsAnswer(index)
    {                
        let arr = [...this.state.questions];
        arr[index].isAnswer = !arr[index].isAnswer;
        this.setState({questions: arr});        
    }    
    // 서브밋 전 서브밋 함수 불러오기
    questionSubmit(e)
    {
        e.preventDefault();
        this.questionAdd()
        .then(res=>{            
            if(res.status === 200)
            {
                alert("문제가 등록되었습니다.");
                window.location.href = "question";
            }
        });
    }
    // 서브밋
    questionAdd()
    {
        const qs = require('qs');

        const url = "http://localhost:5000/question";
        const data = {
            type: this.state.type,
            subject: this.state.subject,
            answers: this.state.questions
        }

        return axios.post(url, qs.stringify(data));
    }
    
    render()
    {
        return(
            <form className="question-insert" onSubmit={this.questionSubmit.bind(this)}>
                <article>
                    <div className="title">
                        <span className="text">• 문제 유형</span>                    
                    </div>
                    <div className="question-type">
                        <label className={this.state.type == 0 ? "btn on" : "btn"} onClick={this.selectType.bind(this, 0)}>
                            <span>객관식</span>
                        </label>
                        <label className={this.state.type != 0 ? "btn on" : "btn"} onClick={this.selectType.bind(this, 1)}>
                            <span>주관식</span>
                        </label>
                    </div>
                </article>
                <article>
                    <div className="title">
                        <span className="text">• 문제</span>                    
                    </div>
                    <div className="question-subject">
                        <label>
                            <input name="subject" value={this.state.subject} onChange={this.subjectChange.bind(this)}/>
                        </label>
                    </div>
                </article>
                <article>
                    <div className="title">
                        <span className="text">• 정답</span>
                        <span className="more" onClick={this.addAnswer.bind(this)}>+ 답 추가</span>
                    </div>
                    <div className="question-answer">                        
                        { this.state.questions.map((obj, index) => {                
                            return this.state.type == 0 ? 
                            <QuestionTypeC toggleIsAnswer={this.toggleIsAnswer.bind(this)} isAnswer={obj.isAnswer} cancelAnswer={this.cancelAnswer.bind(this)} question={obj.question} key={index} num={index} valueChange={this.questionValueChange.bind(this)}/> :  <QuestionTypeD question={obj.question} cancelAnswer={this.cancelAnswer.bind(this)}  key={index} num={index}  valueChange={this.questionValueChange.bind(this)}/>;
                        }) }
                    </div>
                </article>
                <div className="question-submit">
                    <button>
                        등록하기
                    </button>
                </div>
            </form>
        );
    }
}
class QuestionTypeC extends Component
{
    render()
    {
        return(
            <div className="item">
                <span className="subject">
                    <label>{this.props.num+1} <input value={this.props.question} onChange={(e)=>{this.props.valueChange(e, this.props.num)}}/></label>
                </span>
                <span className="btns">                    
                    <span className={this.props.isAnswer ? "btn-isAnswer" : "btn-isAnswer on"} onClick={() => {this.props.toggleIsAnswer(this.props.num)}}>정답</span>
                    <span className="btn-cancel" onClick={() => {this.props.cancelAnswer(this.props.num)}}>취소</span>
                </span>
            </div>
        );
    }
}
class QuestionTypeD extends Component
{
    render()
    {
        return(
            <div className="item">
                <span className="subject">
                    <label>{this.props.num+1} <input value={this.props.question} onChange={(e)=>{this.props.valueChange(e, this.props.num)}}/></label>
                </span>
                <span className="btns">                                        
                    <span className="btn-cancel" onClick={() => {this.props.cancelAnswer(this.props.num)}}>취소</span>
                </span>
            </div>
        );
    }
}
export default QuestionInsert;