import { Component } from 'react';

class QuestionBookInsert extends Component
{
    render()
    {
        return(
            <div className='insert_main'>
                <div className='subject'>
                    <span className='title'>• 제목</span>
                </div>
                <div className='input'>
                    <input className='input_title' type='text' placeholder='제목을 입력해주세요.'></input>
                </div>
                <div className='subject'>
                    <span className='title'>• 현재 문제</span>
                </div>
                <div className='now_question'>
                    <p className='question_list'>•사과 영어로 스펠링은?</p>
                    <p className='question_list'>•사과 영어로 스펠링은?</p>
                    <p className='question_list'>•사과 영어로 스펠링은?</p>
                    <p className='question_list'>•사과 영어로 스펠링은?</p>
                    <p className='question_list'>•사과 영어로 스펠링은?</p>
                </div>
                <div className='color_select'>
                    <span className='title'>• 표지</span>
                    <div className='color-list'>
                        <p className='color'></p>
                        <p className='color'></p>
                        <p className='color'></p>
                        <p className='color'></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuestionBookInsert;