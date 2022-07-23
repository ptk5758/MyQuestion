import React, { Component } from "react";

class Modal extends Component
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
            <div className={this.props.isModal ? "modal open" : "modal"}>
              <div className="modal-content">
                <div className="title-tag-closebtn">
                    <span className="title-tag">• 태그</span>
                    <span className="closebtn" onClick={() => {this.props.closeModal()}}>X</span>
                </div>
                <div className="tag-select">
                    <span className="tag-select-btn">기능사</span>
                    <span className="tag-select-btn">영어단어</span>
                    <span className="tag-select-btn">컴퓨터</span>
                    <span className="tag-select-btn">자격증</span>
                </div>
                <p className="division"></p>
                <div className="question-regist">
                    <span className="questionlist">• 사과 영어로 스펠링은?</span>
                    <span className="registbtn">등록</span>
                    </div>
                <div className="question-regist">
                    <span className="questionlist">• 사과 영어로 스펠링은?</span>
                    <span className="registbtn">등록</span>  
                </div>
                <div className="question-regist">
                    <span className="questionlist">• 사과 영어로 스펠링은?</span>
                    <span className="registbtn">등록</span>
                    </div>
                <div className="question-regist">
                    <span className="questionlist">• 사과 영어로 스펠링은?</span>
                    <span className="registbtn">등록</span>  
                </div>
                  {this.props.content}
              </div>
          </div>
        );
    }
}
export { Modal };