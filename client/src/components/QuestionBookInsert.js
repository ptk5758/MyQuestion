import { Component } from 'react';
import { Modal } from './Modal';
import App from '../App';

class QuestionBookInsert extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            questions : []
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
                    <span className='add' onClick={()=>{this.props.openModal(<QuestionBookInsertModal/>, "문제등록하기")}}>+ 추가하기</span>
                </div>
                <div className='question_list'>
                    {this.state.questions[0] ? this.state.questions.map((obj, index) => {
                        return <QuestionItem/>
                    }) : <div className='question-item'>• 문제를 등록하여 주세요</div>}
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
class QuestionItem extends Component
{
    render()
    {
        return (
            <div className='question-item'>
                • OS가 아닌것은
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
    componentDidMount()
    {
        fetch("http://localhost:5000/question")
        .then(res=>res.json())
        .then(json=>{
            this.setState({questions : json});
        });
    }
    constructor(props)
    {
        super(props);
        this.state = {
            questions : [
                { question: "" }
            ]
        }
    }
        
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
                        {this.state.questions.map((obj,index) => {
                            return(
                                <div className="question-regist-item" key={index}>
                                    <span className='questionlist' >{obj.question}</span>
                                    <span className="registbtn">등록</span>
                                </div>
                            );                            
                        })}                    
                </div>
            </div>
        );
    }
}
export {QuestionBookInsert,QuestionBtn};