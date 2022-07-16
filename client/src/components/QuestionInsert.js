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
                        <span>• 문제 유형</span>
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
                        <span>• 문제</span>
                    </div>
                    <div className="question-subject">
                        <label>
                            <input/>
                        </label>
                    </div>
                </article>
            </div>
        );
    }
}
export default QuestionInsert;