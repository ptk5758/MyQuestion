import React, { Component } from "react";

class Modal extends Component
{
    constructor(props)
    {
        super(props);
        console.log(this.props.isModal);
    }

    render()
    {
        return(
            <div className={this.props.isModal ? "modal open" : "modal"}>
              <div className="modal-content">
                  {this.props.content}
              </div>
          </div>
        );
    }
}
export { Modal };