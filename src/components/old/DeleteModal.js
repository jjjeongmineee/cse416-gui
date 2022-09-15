import React, { Component } from 'react';

export default class DeleteModal extends Component {
    deleteList = () => {
        this.props.deleteListCallback(this.props.currentList);
    }

    render() {
        const { currentList, hideDeleteListModalCallback } = this.props;
        let name = "";
        if (currentList != null) {
            name = currentList.name;
        }
        return (
            <div
                className="modal"
                id="delete-modal"
                data-animation="slideInOutLeft">
                <div className="modal-dialog">
                    <header className="dialog-header">
                        Delete the Top 5 {name} List?
                    </header>
                    <div id="confirm-cancel-container">
                        <button
                            id="dialog-yes-button"
                            className="modal-button"
                            onClick={this.deleteList}
                        >Confirm</button>
                        <button
                            id="dialog-no-button"
                            className="modal-button"
                            onClick={hideDeleteListModalCallback}
                        >Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}