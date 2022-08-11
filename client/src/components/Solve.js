import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Solve()
{
    const { bookId } = useParams();    
    const [book, setBook] = useState({});
    const [cursor, setCursor] = useState(0);

    useEffect(()=>{
        getBook(bookId)
        .then(res => setBook(res.data));
    }, []);

    const getQuiz = () => {
        if(book.questions === undefined)
        {            
            return;
        }
        if(cursor >= book.questions.length)
        {            
            return;
        }
        let question;
        if(cursor < book.questions.length)
        {
            question = book.questions[cursor];
        }
        return <Quiz question={question} />
    }

    return(
        <div className="write-answer">
            { getQuiz() }
            <div className="answer-submit">
                <button>채첨</button>
                { book.questions ? cursor < book.questions.length ? <button onClick={() => {setCursor(cursor+1);}}>다음</button> : "끝" : "" }
            </div>
            <hr/>
            <button onClick={() => console.log(book)}>test1</button>
        </div>
    );
}

function Quiz(props)
{
    console.log(props.question);
    return(
        <div>
            <div className="question-subject">
                <span>• 문제가 들어갈 부분</span>                
            </div>
            <div className="answer-group">                
            <div className="answer">
                    <span><strong> 2 </strong>. 객관식~~~</span>
                    <span className="choice-btn">선택</span>
                </div>
                <div className="answer">
                    <span><strong> 2 </strong>. 객관식~~~</span>
                    <span className="choice-btn on">선택</span>
                </div>
            </div>            
        </div>
    );
}
function getBook(bookId)
{
    return axios({
        method : "GET",
        url : `http://localhost:5000/book/${bookId}`
    });
}
export { Solve };