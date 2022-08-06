import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function SolveQuestion(props)
{
    const[question, setQuestion] = useState();
    const {uid} = useParams();

    useEffect(() => {
        axios({
            url: `http://localhost:5000/book/${uid}`,
            method: 'GET'
        })
        .then(res => setQuestion(res));
    }, []);

    return(
        <div className='solve-question'>
            <div className='solve-question-title'>
                <span className='solve-question-subject'>asdf</span>
            </div>
            <div className='solve-question-answer'>
                <div className='answer-list'>
                    <SolveQuestionAnswer/>
                </div>
            </div>
        </div>
    );
}

function SolveQuestionAnswer(props)
{

    return(
        <div className='answer-list'>
            <span className='select-answer-btn'>1</span>
            <span>&nbsp; apple</span>
        </div>
    );
}

export default SolveQuestion;