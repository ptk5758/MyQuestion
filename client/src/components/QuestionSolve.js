import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function QuestionSolve()
{
    const { uid } = useParams();

    const [book, setBook] = useState({});    

    useEffect(()=>{
        getBook(uid)
        .then(res=> {
            setBook(res.data);            
        })        
    }, []);

    return (
        <div className="question-solve">
            <div className="question-solve-item">
                <div>
                    <span className="descript">• 책이름 : </span>
                    <span>{book.subject ? book.subject : ""}</span>
                </div>
            </div>
            <div className="question-solve-item">
                <div>
                    <span className="descript">• 생성일자 : </span>
                    <span>{book.datetime ? book.datetime : ""}</span>
                </div>
            </div>
            <div className="question-solve-item">
                <div>
                    <span className="descript">• 포함된 문제</span>
                    <span>
                        <ul>                            
                            {book.questions ? book.questions.map((obj, index) => {                                
                                return <li key={index}>{index + 1}. {obj.question}</li>
                            }) : ""}
                        </ul>
                    </span>
                </div>
            </div>

            <div className="question-solve-item">
                <div>
                    <button>수정</button>
                    <button>삭제</button>
                    <button>풀기</button>
                </div>
            </div>

        </div>
    );
}

function getBook(uid)
{
    return axios({
        method : "GET",
        url : `http://localhost:5000/book/${uid}`
    });
}

function getQuestion(uid)
{    
    return axios({
        method : "GET",
        url : `http://localhost:5000/question/${uid}`
    });

}

function WriteAnswerPage()
{
    const { uid, quid } = useParams();

    const [ question, setQuestion ] = useState({});

    useEffect(()=>{
        getQuestion(quid)
        .then(res=> {            
            setQuestion(res.data);
        })
    }, []);

    return(
        <div className="write-answer">        
        <button onClick={console.log(question)}>test</button>
            <div className="question-subject">
                <span>• { question.question ? question.question : "" }</span>
            </div>
            <div className="answer-group">
                {question.answers ? question.answers.map((obj, index) => {
                    return <Answer key={index} index={index} answer={obj}/>;
                }) : ""}
            </div>
        </div>
    );
}

function Answer(props)
{
    console.log(props);
    return(
        <div className="answer">
            <span><strong>{ props.index + 1 }</strong>. {props.answer.answer}</span>
            <span className="choice-btn">선택</span>
        </div>
    );
}

export { QuestionSolve, WriteAnswerPage };