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
                    <span className='add' onClick={() => {this.props.setModal()}}>+ 추가하기</span>
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

class M1 extends Component
{
    render()
    {
        return(
            <div>m1</div>
        );
    }
}
class M2 extends Component
{
    render()
    {
        return(
            <div>m1</div>
        );
    }
}
class M3 extends Component
{
    render()
    {
        return(
            <div>m1</div>
        );
    }
}

export {QuestionBookInsert,QuestionBtn};