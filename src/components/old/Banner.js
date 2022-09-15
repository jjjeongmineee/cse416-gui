import React from "react";
import EditToolbar from "./EditToolbar";

export default class Banner extends React.Component {
    render() {
        const { title, closeCallback, undoCallback, redoCallback, undoBC, redoBC, closeB } = this.props;
        return (
            <div id="top5-banner">
                {title}
                <EditToolbar 
                    closeCallback={closeCallback}
                    undoCallback={undoCallback}
                    redoCallback={redoCallback}
                    undoBC={undoBC}
                    redoBC={redoBC}
                    closeB={closeB}
                />
            </div>
        );
    }
}