import React from "react";

export default class ListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.item,
            editActive: false,
        }
    }
    handleToggleEdit = (event) => {
        this.setState({
            editActive: !this.state.editActive
        });
    }
    handleUpdate = (event) => {
        this.setState({ text: event.target.value });
    }
    handleKeyPress = (event) => {
        if (event.code === "Enter") {
            this.handleBlur();
        }
    }
    handleBlur = () => {
        let key = this.props.index;
        console.log(this.state.text);
        let textValue = this.state.text;
        
        //console.log("ListCard handleBlur: " + textValue);
        this.props.renameListItemCallback(key, textValue);
        this.handleToggleEdit();
    }

    render() {
        const { idn, item, index } = this.props;

        if (this.state.editActive) {
            return (
                <input
                    id={"item-text-input-" + index}
                    className='list-item'
                    type='text'
                    onKeyPress={this.handleKeyPress}
                    onBlur={this.handleBlur}
                    onChange={this.handleUpdate}
                    defaultValue={item}
                />)
        }
        else {
            return (
                <div
                    id={idn}
                    onDoubleClick={this.handleToggleEdit}
                    className="top5-item">
                        {item}
                </div>
            );
        }
    }
}