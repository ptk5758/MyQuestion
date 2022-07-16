import React, { Component } from "react";
class Modal extends Component
{
    render()
    {
        return(
            <div className="modal">
              <div className="modal-content">
                  {this.props.content}
              </div>
          </div>
        );
    }
}
export { Modal };