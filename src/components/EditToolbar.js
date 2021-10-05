import React from "react";

export default class EditToolbar extends React.Component {

    handleClose = (ev) => {
        if (this.props.closeB) {
            this.props.closeCallback();
        }
    }

    handleUndo = (ev) => {
        if (this.props.undoBC) {
            this.props.undoCallback();
        }
    }

    handleRedo = (ev) => {
        if (this.props.redoBC) {
            this.props.redoCallback();
        }
    }



    render() {
        const { undoBC, redoBC, closeB } = this.props;
        return (
        
            <div id="edit-toolbar">
                <div 
                    id='undo-button' 
                    className={!undoBC ? "top5-button-disabled" : "top5-button"}
                    onClick={this.handleUndo}>
                        &#x21B6;
                </div>
                <div
                    id='redo-button'
                    className={!redoBC ? "top5-button-disabled" : "top5-button"}
                    onClick={this.handleRedo} >
                        &#x21B7;
                </div>
                <div
                    id='close-button'
                    className={!closeB ? "top5-button-disabled" : "top5-button"}
                    onClick={this.handleClose} >
                        &#x24E7;
                </div>
            </div>
        )
    }
}