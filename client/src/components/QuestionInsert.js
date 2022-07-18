import React from "react";
import { Component } from "react";
class QuestionInsert extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            type: 0,
            subject: "",
            questions: [
                {question : ""}
            ]
        }
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
        this.setState({
            questions: [...this.state.questions, {question: ""}]
        });
    }
    cancelAnswer(index)
    {   
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
    render()
    {
        return(
            <div className="question-insert">                
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
                            <input value={this.state.subject} onChange={this.subjectChange.bind(this)}/>
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
                            return this.state.type == 0 ? <QuestionTypeC cancelAnswer={this.cancelAnswer.bind(this)} question={obj.question} key={index} num={index} valueChange={this.questionValueChange.bind(this)}/> : <QuestionTypeD question={obj.question} cancelAnswer={this.cancelAnswer.bind(this)}  key={index} num={index}  valueChange={this.questionValueChange.bind(this)}/>;
                        }) }
                    </div>
                </article>
                <div className="question-submit">
                    <button>
                        등록하기
                    </button>
                </div>
            </div>
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
                    <label>{this.props.num} <input value={this.props.question} onChange={(e)=>{this.props.valueChange(e, this.props.num)}}/></label>
                </span>
                <span className="btns">                    
                    <span className="btn-isAnswer">정답</span>
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
                    <label>{this.props.num} <input value={this.props.question} onChange={(e)=>{this.props.valueChange(e, this.props.num)}}/></label>
                </span>
                <span className="btns">                                        
                    <span className="btn-cancel" onClick={() => {this.props.cancelAnswer(this.props.num)}}>취소</span>
                </span>
            </div>
        );
    }
}
export default QuestionInsert;