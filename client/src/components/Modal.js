import React, { Component } from "react";

class Modal extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div className={this.state.modal ? "modal open" : "modal"}  >
              <div className="modal-content">
                <span className="tag-select-title">• 태그</span>
                <span className="closebtn">X</span>
                <div className="tag-select">
                    <span className="tag-select-btn">tag</span>
                    <span className="tag-select-btn">tag</span>
                    <span className="tag-select-btn">tag</span>
                    <span className="tag-select-btn">tag</span>
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
export default Modal;