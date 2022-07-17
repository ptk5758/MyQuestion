import { Component } from "react";
import { QuestionLatest } from './Question';
import { QuestionBookLatest } from './QuestionBook';
class Main extends Component
{    
    render()
    {
        let data = ["1번문제 어쩌구","2번문제 어쩌구","3번문제 어쩌구"];
        return(
            <div className="main">
                <article>
                    <div className="title">
                        <span className="text">나의 문제</span>
                        <span className="more">더보기</span>
                    </div>
                    <QuestionLatest questions={data}/>
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