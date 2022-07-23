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
                    <div className="modal-header">
                        <span className="modal-header-title">• 모달타이틀</span>
                        <span className="modal-close-btn" onClick={()=>{this.props.closeModal()}}>X</span>
                    </div>
                    {this.props.content}
                </div>
            </div>
        );
    }
}
export { Modal };