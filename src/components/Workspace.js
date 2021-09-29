import React from "react";
import ListItem from "./ListItem";


export default class Workspace extends React.Component {


    handleToggleEdit(event) {
        
    }

    render() {

        const { currentList, renameListItemCallback } = this.props;

        
        if (currentList != null) {
            let listKey = currentList.key;
 
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
                            
                            {currentList.items.map((item, index) => {
                                let idn = "item-" + index;
                                return <ListItem
                                    id={idn}
                                    lKey={listKey}
                                    renameListItemCallback={renameListItemCallback}
                                    index={index}
                                    item={item}
                                />

                            })}
                        </div>
                    </div>
                </div>
            )
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

                    </div>
                </div>
            </div>
        )
    }
}