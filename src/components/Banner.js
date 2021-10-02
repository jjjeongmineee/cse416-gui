import React from "react";
import EditToolbar from "./EditToolbar";

export default class Banner extends React.Component {
    render() {
        const { title, currentList, closeCallback, undoCallback, redoCallback } = this.props;
        return (
            <div id="top5-banner">
                {title}
                <EditToolbar 
                    closeCallback={closeCallback}
                    undoCallback={undoCallback}
                    redoCallback={redoCallback}
                    currentList={currentList}
                />
            </div>
        );
    }
}