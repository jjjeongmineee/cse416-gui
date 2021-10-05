import jsTPS_Transaction from "./jsTPS.js"
/**
 * MoveItem_Transaction
 * 
 * This class represents a transaction that works with drag
 * and drop. It will be managed by the transaction stack.
 * 
 * @author McKilla Gorilla
 * @author ?
 */
export default class MoveItem_Transaction extends jsTPS_Transaction {
    constructor(initModel, initOld, initNew) {
        super();
        this.model = initModel;
        this.oldList = initOld;
        this.newList = initNew;
    }

    doTransaction() {
        this.model = this.newList;
    }
    
    undoTransaction() {
        this.model = this.oldList;
    }
}