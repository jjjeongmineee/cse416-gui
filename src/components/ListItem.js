import React from "react";

export default class ListItem extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            text: this.props.item,
            listKey: this.props.lKey,
            editActive: false,

        }
    }
    handleToggleEdit = (ev) => {
        this.setState({
            editActive: !this.state.editActive
        });
    }
    handleUpdate = (ev) => {
        this.setState({ text: ev.target.value });
    }
    handleKeyPress = (ev) => {
        if (ev.code === "Enter") {
            this.handleBlur();
        }
    }
    handleBlur = () => {
        let idx = this.props.index;
        //console.log(this.state.text);
        let textValue = this.state.text;
        //console.log(this.state.listKey);
        
        //console.log("ListCard handleBlur: " + textValue);
        this.props.renameListItemCallback(this.state.listKey, idx, textValue);
        this.handleToggleEdit();
    }

    handleDrag = (ev) => {
        ev.dataTransfer.setData("text", ev.target.id);
        
    }

    handleDragOver = (ev) => {
        ev.preventDefault();
    }

    handleDragEnter = (ev) => {
        ev.target.style.backgroundColor = "green";
    }

    handleDragLeave = (ev) => {
        ev.target.style.backgroundColor = "";
    }

    handleDrop = (ev) => {
        ev.preventDefault();
        ev.target.style.backgroundColor = "";
        let data = ev.dataTransfer.getData("text");
        let originData = document.getElementById(data).innerHTML;
        let tempVal = originData;
        let list = ["", "", "", "", ""]
        for (let i = 0; i < 5; i++) {
            list[i] = document.getElementById("item-" + i).innerHTML;
        }
        let sourceId = parseInt(data.slice(5, 6));
        let id = parseInt(ev.target.id.slice(5, 6));
        for (let i = id; i <= 5; i++) {
            if (i === 5) {
                i = -1;
            }
            else {
                if (i === sourceId) {
                    console.log("ye");
                    let elemId = document.getElementById("item-" + i);
                    elemId.innerHTML = tempVal;
                    list[i] = tempVal;
                    break;
                }
                let elemId = document.getElementById("item-" + i);
                let secondTemp = elemId.innerHTML;
                elemId.innerHTML = tempVal;
                list[i] = tempVal;
                tempVal = secondTemp;
            }
        }
        this.props.onDropCallback(list, this.state.listKey);
    }

    render() {
        const { item, index } = this.props;

        if (this.state.editActive) {
            return (
                <input
                    id={"item-text-input-" + index}
                    className='list-card'
                    type='text'
                    onKeyPress={this.handleKeyPress}
                    onBlur={this.handleBlur}
                    onChange={this.handleUpdate}
                    defaultValue={item}
                />)
        }
        else {
            let idn = "item-" + index
            return (
                <div
                    id={idn}
                    onDoubleClick={this.handleToggleEdit}
                    className="top5-item"
                    draggable="true"
                    onDragStart={this.handleDrag}
                    onDragOver={this.handleDragOver}
                    onDrop={this.handleDrop}
                    onDragEnter={this.handleDragEnter}
                    onDragLeave={this.handleDragLeave}
                    >
                        {item}
                </div>
            );
        }
    }
}