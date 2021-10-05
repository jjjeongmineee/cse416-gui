import React from 'react';
import './App.css';

// IMPORT DATA MANAGEMENT AND TRANSACTION STUFF
import DBManager from './db/DBManager';

// THESE ARE OUR REACT COMPONENTS
import DeleteModal from './components/DeleteModal';
import Banner from './components/Banner.js'
import Sidebar from './components/Sidebar.js'
import Workspace from './components/Workspace.js';
import Statusbar from './components/Statusbar.js'

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
        }

        this.transactions = [];
        this.totalTransactions = 0;
        this.recentTransactionIndex = -1;
        this.undoTransactions = []
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
                keyNamePairs: newKeyNamePairs
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
        currentList.items = newList;

        this.addTransaction();

        this.setState(prevState => ({
            currentList: prevState.currentList
        }), () => {
            let list = this.db.queryGetList(key);

            list.items = newList;
            console.log(list.items);
            this.db.mutationUpdateList(list);
        });
    }

    renameListItem = (index, newName) => {
        let currentList = this.state.currentList;
        let key = currentList.key;
        //console.log(currentList + " " + newName);
        this.addTransaction(currentList);
        //console.log(currentList.items);
        currentList.items[index] = newName;
        //console.log(currentList.items);
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
            sessionData: prevState.sessionData
        }), () => {
            // ANY AFTER EFFECTS?
            //console.log(newCurrentList.name)
        });
    }
    // THIS FUNCTION BEGINS THE PROCESS OF CLOSING THE CURRENT LIST
    closeCurrentList = () => {
        this.setState(prevState => ({
            currentList: null,
            listKeyPairMarkedForDeletion : prevState.listKeyPairMarkedForDeletion,
            sessionData: this.state.sessionData,
        }), () => {
            // ANY AFTER EFFECTS?
        });
    }

    hasTransactionToUndo = () => {
        return (this.recentTransactionIndex + 1) <= this.totalTransactions;
    }

    hasTransactionToRedo = () => {
        return this.recentTransactionIndex >= 0;
    }

    undo = () => {
        console.log(this.transactions[0][0]);
        if (this.hasTransactionToUndo()) {
            //console.log(this.transactions);
            
            let clist = this.state.currentList;
            //console.log(clist);
            
            for (let i = 0; i < 5; i++) {
                clist.items[i] = this.transactions[this.recentTransactionIndex][i];
            } 
            //console.log(this.transactions[0]);
            //console.log(clist);
            this.setState(prevState => ({
                currentList : clist
            }));
            this.undoTransactions.push(this.transactions.pop());
            this.totalTransactions--;
            this.recentTransactionIndex--;
            //this.loadList(this.state.currentList.key);
        }
    }

    redo = () => {
        if (this.hasTransactionToRedo()) {
            let clist = this.state.currentList;
            //console.log(clist);
            for (let i = 0; i < 5; i++) {
                clist.items[i] = this.undoTransactions[this.undoTransactions.length - 1][i];
            } 
            //console.log(this.transactions[0]);
            //console.log(clist);
            this.setState(prevState => ({
                currentList : clist
            }));
            this.transactions.push(this.undoTransactions.pop());
            this.totalTransactions++;
            this.recentTransactionIndex++;
        }
    }

    addTransaction = (currentList) => {
        console.log(currentList.items);  // gives the old value.. the one to be put on the transaction stack
        this.transactions[this.totalTransactions] = currentList.items;
         // for some reason.. it gives the new values even though I am pushing the old values
        this.totalTransactions++;
        this.recentTransactionIndex = this.transactions.length - 1;
        console.log(this.transactions[0][0]);
    }

    clearStack = () => {
        this.transactions = [];
        this.totalTransactions = 0;
        this.recentTransactionIndex = -1;
        this.undoTransactions = [];
    }

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


    render() {
        return (
            <div id="app-root">
                <Banner 
                    title='Top 5 Lister'
                    currentList={this.state.currentList}
                    closeCallback={this.closeCurrentList}
                    undoCallback={this.undo}
                    redoCallback={this.redo} />
                <Sidebar
                    heading='Your Lists'
                    currentList={this.state.currentList}
                    keyNamePairs={this.state.sessionData.keyNamePairs}
                    createNewListCallback={this.createNewList}
                    deleteListCallback={this.deleteList}
                    loadListCallback={this.loadList}
                    renameListCallback={this.renameList}
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
