import { Component } from "react";
class Main extends Component
{
    render()
    {
        return(
            <div className="main">
                <article>
                    <div className="title">
                        <span className="text">나의 문제</span>
                        <span className="more">더보기</span>
                    </div>
                    <div className="question-list">
                        <div className="item">
                            <span className="question-subject">사과의 스펠링은?</span>
                            <span className="question-tag">TAG</span>
                        </div>
                        <div className="item">
                            <span className="question-subject">사과의 스펠링은?</span>
                            <span className="question-tag">2022산업기사</span>
                        </div>
                        <div className="item">
                            <span className="question-subject">사과의 스펠링은?</span>
                            <span className="question-tag">TAG</span>
                        </div>
                        <div className="item">
                            <span className="question-subject">사과의 스펠링은?</span>
                            <span className="question-tag">TAG</span>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}
export default Main;