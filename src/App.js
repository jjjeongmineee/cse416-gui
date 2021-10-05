import React from 'react';
import './App.css';

// IMPORT DATA MANAGEMENT AND TRANSACTION STUFF
import DBManager from './db/DBManager';

// THESE ARE OUR REACT COMPONENTS
import DeleteModal from './components/DeleteModal';
import Banner from './components/Banner.js';
import Sidebar from './components/Sidebar.js';
import Workspace from './components/Workspace.js';
import Statusbar from './components/Statusbar.js';
import ChangeItem_Transaction from './components/ChangeItem_Transaction.js';
import MoveItem_Transaction from './components/MoveItem_Transaction.js';
import jsTPS_Transaction from './components/jsTPS.js'

class App extends React.Component {
    constructor(props) {
        super(props);

        // THIS WILL TALK TO LOCAL STORAGE
        this.db = new DBManager();

        // GET THE SESSION DATA FROM OUR DATA MANAGER
        let loadedSessionData = this.db.queryGetSessionData();

        // SETUP THE INITIAL STATE
        this.state = {
            currentList : null,
            sessionData : loadedSessionData,
            undoB : false,
            redoB : false,
            closeB: false,
            addNewListB: true
        }
        
        this.tps = new jsTPS_Transaction();
    }
    sortKeyNamePairsByName = (keyNamePairs) => {
        keyNamePairs.sort((keyPair1, keyPair2) => {
            // GET THE LISTS
            return keyPair1.name.localeCompare(keyPair2.name);
        });
    }
    // THIS FUNCTION BEGINS THE PROCESS OF CREATING A NEW LIST
    createNewList = () => {
        // FIRST FIGURE OUT WHAT THE NEW LIST'S KEY AND NAME WILL BE
        let newKey = this.state.sessionData.nextKey;
        let newName = "Untitled" + newKey;
        // MAKE THE NEW LIST
        let newList = {
            key: newKey,
            name: newName,
            items: ["?", "?", "?", "?", "?"]
        };

        // MAKE THE KEY,NAME OBJECT SO WE CAN KEEP IT IN OUR
        // SESSION DATA SO IT WILL BE IN OUR LIST OF LISTS
        let newKeyNamePair = { "key": newKey, "name": newName };
        let updatedPairs = [...this.state.sessionData.keyNamePairs, newKeyNamePair];
        this.sortKeyNamePairsByName(updatedPairs);

        // CHANGE THE APP STATE SO THAT IT THE CURRENT LIST IS
        // THIS NEW LIST AND UPDATE THE SESSION DATA SO THAT THE
        // NEXT LIST CAN BE MADE AS WELL. NOTE, THIS setState WILL
        // FORCE A CALL TO render, BUT THIS UPDATE IS ASYNCHRONOUS,
        // SO ANY AFTER EFFECTS THAT NEED TO USE THIS UPDATED STATE
        // SHOULD BE DONE VIA ITS CALLBACK
        this.setState(prevState => ({
            currentList: newList,
            sessionData: {
                nextKey: prevState.sessionData.nextKey + 1,
                counter: prevState.sessionData.counter + 1,
                keyNamePairs: updatedPairs
            }
        }), () => {
            // PUTTING THIS NEW LIST IN PERMANENT STORAGE
            // IS AN AFTER EFFECT
            this.db.mutationCreateList(newList);
        });
    }
    renameList = (key, newName) => {
        let newKeyNamePairs = [...this.state.sessionData.keyNamePairs];
        // NOW GO THROUGH THE ARRAY AND FIND THE ONE TO RENAME
        for (let i = 0; i < newKeyNamePairs.length; i++) {
            let pair = newKeyNamePairs[i];
            if (pair.key === key) {
                pair.name = newName;
            }
        }
        this.sortKeyNamePairsByName(newKeyNamePairs);

        // WE MAY HAVE TO RENAME THE currentList
        let currentList = this.state.currentList;
        if (currentList.key === key) {
            currentList.name = newName;
        }

        this.clearStack();

        this.setState(prevState => ({
            currentList: prevState.currentList,
            sessionData: {
                nextKey: prevState.sessionData.nextKey,
                counter: prevState.sessionData.counter,
                keyNamePairs: newKeyNamePairs,
                addNewListB:  false
            }
        }), () => {
            // AN AFTER EFFECT IS THAT WE NEED TO MAKE SURE
            // THE TRANSACTION STACK IS CLEARED
            let list = this.db.queryGetList(key);
            list.name = newName;
            this.db.mutationUpdateList(list);
            this.db.mutationUpdateSessionData(this.state.sessionData);
        });
    }


    onDrop = (newList, key) => {
        let currentList = this.state.currentList;
        this.addMoveTransaction(currentList.items, newList);
        currentList.items = newList;

        this.setState(prevState => ({
            currentList: prevState.currentList
        }), () => {
            let list = this.db.queryGetList(key);

            list.items = newList;
            this.db.mutationUpdateList(list);
        });
    }

    renameListItem = (index, newName) => {
        let currentList = this.state.currentList;
        let key = currentList.key;
        this.addChangeTransaction(index, currentList.items[index], newName);
        currentList.items[index] = newName;
        this.setState(prevState => ({
            currentList: prevState.currentList
        }), () => {
            // AN AFTER EFFECT IS THAT WE NEED TO MAKE SURE
            // THE TRANSACTION STACK IS CLEARED
            let list = this.db.queryGetList(key);
            list.items[index] = newName;
            this.db.mutationUpdateList(list);
        });
    }


    // THIS FUNCTION BEGINS THE PROCESS OF LOADING A LIST FOR EDITING
    loadList = (key) => {
        let newCurrentList = this.db.queryGetList(key);
        this.setState(prevState => ({
            currentList: newCurrentList,
            sessionData: prevState.sessionData,
            closeB: true,
            addNewListB:false
        }), () => {
            // ANY AFTER EFFECTS?
            //console.log(newCurrentList.name)
        });
        this.clearStack();
    }
    // THIS FUNCTION BEGINS THE PROCESS OF CLOSING THE CURRENT LIST
    closeCurrentList = () => {
        this.setState(prevState => ({
            currentList: null,
            listKeyPairMarkedForDeletion : prevState.listKeyPairMarkedForDeletion,
            sessionData: this.state.sessionData,
            closeB: false,
            addNewListB:true
        }), () => {
            // ANY AFTER EFFECTS?
        });
        this.clearStack();
    }

    undo = () => {
        if (!this.tps.hasTransactionToUndo()) {
            return;
        }
        this.tps.undoTransaction();
        this.setState(prevState => ({
            redoB : true
        }));
        if (!this.tps.hasTransactionToUndo()) {
            this.setState(prevState => ({
                undoB : false
            }));
        }
    }

    redo = () => {
        if (!this.tps.hasTransactionToRedo()) {
            return;
        }
        this.tps.doTransaction();
        this.setState(prevState => ({
            undoB : true
        }));
        if (!this.tps.hasTransactionToRedo()) {
            this.setState(prevState => ({
                redoB : false
            }));
        }
    }

    addChangeTransaction = (id, oldText, newText) => {
        let transaction = new ChangeItem_Transaction(this.state.currentList.items, id, oldText, newText);
        this.tps.addTransaction(transaction);
        this.setState(prevState => ({
            undoB : true
        }));
    }

    addMoveTransaction = (oldList, newList) => {
        let transaction = new MoveItem_Transaction(this.state.currentList.items, oldList, newList);
        this.tps.addTransaction(transaction);
        this.setState(prevState => ({
            undoB : true
        }));
    }

    clearStack = () => {
        this.setState(prevState => ({
            undoB : false,
            redoB : false
        }));
        this.tps.clearAllTransactions();
;    }

    deleteList = () => {
        // SOMEHOW YOU ARE GOING TO HAVE TO FIGURE OUT
        // WHICH LIST IT IS THAT THE USER WANTS TO
        // DELETE AND MAKE THAT CONNECTION SO THAT THE
        // NAME PROPERLY DISPLAYS INSIDE THE MODAL
        this.showDeleteListModal();
    }
    confirmDelete = (currentList) => {
        this.db.deleteList(currentList)
        this.hideDeleteListModal();
        let sessionD = this.db.queryGetSessionData();
        this.setState(prevState => ({
            currentList: null,
            sessionData: sessionD
        }));
    }
    // THIS FUNCTION SHOWS THE MODAL FOR PROMPTING THE USER
    // TO SEE IF THEY REALLY WANT TO DELETE THE LIST
    showDeleteListModal() {
        let modal = document.getElementById("delete-modal");
        modal.classList.add("is-visible");
    }
    // THIS FUNCTION IS FOR HIDING THE MODAL
    hideDeleteListModal() {
        let modal = document.getElementById("delete-modal");
        modal.classList.remove("is-visible");
    }

    undoRedoCall = (ev) => {
        if (ev.ctrlKey) {
            if (ev.key === 'y') {
                this.redo();
            }
            else if (ev.key === 'z') {
                this.undo();
            }
        }
    }


    render() {
        window.onkeydown = this.undoRedoCall;
        return (
            <div id="app-root">
                <Banner 
                    title='Top 5 Lister'
                    currentList={this.state.currentList}
                    closeCallback={this.closeCurrentList}
                    undoCallback={this.undo}
                    redoCallback={this.redo} 
                    undoBC={this.state.undoB}
                    redoBC={this.state.redoB}
                    closeB={this.state.closeB} />
                <Sidebar
                    heading='Your Lists'
                    currentList={this.state.currentList}
                    keyNamePairs={this.state.sessionData.keyNamePairs}
                    createNewListCallback={this.createNewList}
                    deleteListCallback={this.deleteList}
                    loadListCallback={this.loadList}
                    renameListCallback={this.renameList}
                    newListB={this.state.addNewListB}
                />
                <Workspace
                    currentList={this.state.currentList}
                    renameListItemCallback={this.renameListItem}
                    onDropCallback={this.onDrop}
                />
                <Statusbar 
                    currentList={this.state.currentList} />
                <DeleteModal
                    hideDeleteListModalCallback={this.hideDeleteListModal}
                    deleteListCallback={this.confirmDelete}
                    currentList={this.state.currentList}
                />
                <input type="hidden" />
            </div>
        );
    }
}

export default App;
