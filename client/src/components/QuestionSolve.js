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
                    <span>• 책이름 : </span>
                    <span>{book.subject ? book.subject : ""}</span>
                </div>
            </div>
            <div className="question-solve-item">
                <div>
                    <span>• 생성일짜 : </span>
                    <span>{book.datetime ? book.datetime : ""}</span>
                </div>
            </div>
            <div className="question-solve-item">
                <div>
                    <span>• 포함된 문제</span>
                    <span>
                        <ul>                            
                            {book.questions ? book.questions.map((obj, index) => {                                
                                return <li key={index}>{obj.question}</li>
                            }) : ""}
                        </ul>
                    </span>
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

export { QuestionSolve };