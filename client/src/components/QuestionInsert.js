import React from "react";
import { Component } from "react";
class QuestionInsert extends Component
{
    render()
    {
        return(
            <div className="question-insert">
                <article>
                    <div className="title">
                        <span className="text">• 문제 유형</span>                    
                    </div>
                    <div className="question-type">
                        <label className="btn">
                            <span>객관식</span>
                        </label>
                        <label className="btn on">
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
                            <input/>
                        </label>
                    </div>
                </article>
                <article>
                    <div className="title">
                        <span className="text">• 정답</span>
                        <span className="more">+ 답 추가</span>
                    </div>
                    <div className="question-answer">
                        <QuestionTypeD/>
                        <QuestionTypeD/>
                        <QuestionTypeD/>
                        <QuestionTypeD/>
                        <QuestionTypeD/>
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
                <span className="subject">1. 사과의 스펠링은?</span>
                <span className="btns">                    
                    <span className="btn-isAnswer">정답</span>
                    <span className="btn-cancel">취소</span>
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
                <span className="subject">1. 사과의 스펠링은?</span>
                <span className="btns">                                        
                    <span className="btn-cancel">취소</span>
                </span>
            </div>
        );
    }
}
export default QuestionInsert;