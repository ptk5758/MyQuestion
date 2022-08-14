import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Solve()
{
    return(
        <div className="write-answer">
            <div>            
                <div className="question-subject">
                    <span>• 문제가 들어갈 부분</span>
                </div>
                <div className="answer-group">                
                    <div className="answer">
                        <span><strong>1</strong>. 객관식~~~</span>
                        <span className="choice-btn on">선택</span>
                    </div>
                </div>
            </div>
            <div className="answer-submit">
                <button>채첨</button>
                <button>다음</button>
            </div>            
        </div>
    );
}

export { Solve };