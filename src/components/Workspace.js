import React from "react";

export default class Workspace extends React.Component {

    render() {

        const { currentList } = this.props;
        let items = ["", "", "", "", ""];
        
        if (currentList) {
            items = [currentList.items[0], currentList.items[1], currentList.items[2], currentList.items[3], currentList.items[4]]
        }
 
        return (
            <div id="top5-workspace">
                <div id="workspace-edit">
                    <div id="edit-numbering">
                        <div className="item-number">1.</div>
                        <div className="item-number">2.</div>
                        <div className="item-number">3.</div>
                        <div className="item-number">4.</div>
                        <div className="item-number">5.</div>
                    </div>
                    <div id="edit-items">
                        <div className="item-1" className="top5-item"> { items[0] } </div>
                        <div className="item-2" className="top5-item"> { items[1] } </div>
                        <div className="item-3" className="top5-item"> { items[2] } </div>
                        <div className="item-4" className="top5-item"> { items[3] } </div>
                        <div className="item-5" className="top5-item"> { items[4] } </div>
                    </div>
                </div>
            </div>
        )
    }
}