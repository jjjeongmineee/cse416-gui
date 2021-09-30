import React from "react";

export default class EditToolbar extends React.Component {
    handleUndo = () => {

    }

    handleRedo = () => {
        
    }

    handleClose = () => {
        
    }

    
    render() {
        return (
            <div id="edit-toolbar">
                <div 
                    id='undo-button' 
                    className="top5-button"
                    onClick={this.handleUndo}>
                        &#x21B6;
                </div>
                <div
                    id='redo-button'
                    className="top5-button"
                    onClick={this.handleRedo}>
                        &#x21B7;
                </div>
                <div
                    id='close-button'
                    className="top5-button"
                    onClick={this.handleClose}>
                        &#x24E7;
                </div>
            </div>
        )
    }
}