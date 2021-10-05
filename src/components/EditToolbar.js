import React from "react";

export default class EditToolbar extends React.Component {

    handleClose = (ev) => {
        this.props.closeCallback();
    }

    handleUndo = (ev) => {
        this.props.undoCallback();
    }

    handleRedo = (ev) => {
        this.props.redoCallback();
    }

    render() {
        const { undoBC, redoBC, closeB } = this.props;
        return (
        
            <div id="edit-toolbar">
                <div 
                    id='undo-button' 
                    className="top5-button"
                    onClick={this.handleUndo}
                    disabled={!undoBC}>
                        &#x21B6;
                </div>
                <div
                    id='redo-button'
                    className="top5-button"
                    onClick={this.handleRedo}
                    disabled={!redoBC} >
                        &#x21B7;
                </div>
                <div
                    id='close-button'
                    className="top5-button"
                    onClick={this.handleClose}
                    disabled={!closeB} >
                        &#x24E7;
                </div>
            </div>
        )
    }
}