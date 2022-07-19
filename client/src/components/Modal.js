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
            <div className={this.props.open ? "modal open" : "modal"}>
              <div className="modal-content">
                  {this.props.content}
              </div>
          </div>
        );
    }
}
export { Modal };