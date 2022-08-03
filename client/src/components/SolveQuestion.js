import React, {useState} from 'react';

function SolveQuestion(props)
{
    const[question, setQuestion] = useState();

    return(
        <div className='solve-question'>
            <div className='solve-question-title'>
                <span className='solve-question-subject'>사과의 스펠링은?</span>
            </div>
            <div className='solve-question-answer'>
                <div className='answer-list'>
                    <SolveQuestionAnswer/>
                </div>
                <div className='answer-list'>
                    <span className='select-answer-btn'>2</span>
                    <span>&nbsp; appl</span>
                </div>
                <div className='answer-list'>
                    <span className='select-answer-btn'>3</span>
                    <span>&nbsp; aple</span>
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