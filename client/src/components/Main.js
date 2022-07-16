import { Component } from "react";
import { QuestionLatest } from './Question';
import { QuestionBookLatest } from './QuestionBook';
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
                    <QuestionLatest/>
                </article>

                <article>
                    <div className="title">
                        <span className="text">문제집</span>
                        <span className="more">더보기</span>
                    </div>
                    <QuestionBookLatest/>
                </article>
            </div>
        );
    }
}
export default Main;