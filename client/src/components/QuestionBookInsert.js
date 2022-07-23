import { Component } from 'react';
import { Modal } from './Modal';
import App from '../App';

class QuestionBookInsert extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            
        }
    }

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
                    <span className='add' onClick={()=>{this.props.openModal(<QuestionBookInsertModal/>)}}>+ 추가하기</span>
                </div>
                <div className='question_list'>
                    <QuestionBtn/>
                    <QuestionBtn/>
                    <QuestionBtn/>
                    <QuestionBtn/>
                    <QuestionBtn/>
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

class QuestionBtn extends Component
{
    render()
    {
        return(
        <div className='now_question'>
            <span className='one_question'>•사과 영어로 스펠링은?</span>
            <span className='cancelbtn'>취소</span>
        </div>
        );
    }
}
class QuestionBookInsertModal extends Component
{
    render()
    {
        return(
            <div>
                <div className="tag-select">
                    <span className="tag-select-btn">기능사</span>
                    <span className="tag-select-btn">영어단어</span>
                    <span className="tag-select-btn">컴퓨터</span>
                    <span className="tag-select-btn">자격증</span>
                </div>
                <p className="division"></p>
                <div className="question-regist">                    
                    <div className="question-regist-item">
                        <p className='questionlist' >어쩌구어쩌구</p>
                        <span className="registbtn">등록</span>
                    </div>
                </div>
            </div>
        );
    }
}
export {QuestionBookInsert,QuestionBtn};