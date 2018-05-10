// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document




class Node {
    //data and next node on chain reference
    constructor(data, next) {
        //'data' in nodes is mere convention
        this.data = data;
        //so is 'next'
        this.next = next;
        //what about nodes without next like last node on chain?
        //convention is null as it lacks the un-set connotation of 'undefined'
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    //method to add a brand new node as head of LList 
    //insert, NOT overwrite if there's an existing node!
    insertFirst(data) {
        //create a new node, set its 'next' to the head
        const node = new Node(data, this.head)
        //takes temporary new node's variable and assigns to head 
        this.head = node
        //could be condensed to this.head = new Node(data, this.head)
    }
    size() {
        let counter = 0
        let node = this.head
        //enter into while loop on the first node, the head
        while (node) {
            //indicate there is a node
            counter++
            //move to the node's 'next' until you hit null, a falsy value
            //which evaluates to ending the while loop.
            node = node.next;
        }
        //how many nodes are there? here you go.
        return counter
    }
    getFirst() {
        return this.head
    }
    getLast() {
        let node = this.head
        while (node) {
            if (!node.next) {
                return node
            }
            node = node.next
        }
    }
    clear() {
        this.head = null;
    }
    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }
    removeLast() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null
        }
        //set previous to first, then node to second, etc
        let previous = this.head
        let node = this.head.next
        //while not on last node...
        while (node.next) {
            //shift previous forward
            previous = node;
            //shift node even further
            node = node.next
        }
        //when on last node, the previou's node's next would == last node..
        //so clear
        previous.next = null
    }
    //always reuse already authored code like this! 
    insertLast(data) {
        const last = this.getLast()
        //there could be no nodes, thus checking for a last one 
        if (last) {
            //set previous last's next to a new created node
            last.next = new Node(data);
        } else {
            //the chain is empty, insert at head 
            this.head = new Node(data)
        }
    }
    getAt(index) {
        let counter = 0
        let node = this.head
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        //if exiting while loop because index does notexist
        return null;
    }
    removeAt(index) {
        //if empty, exit(return)
        if (!this.head) {
            return;
        }
        //if removing head, set head to node after head
        if (index === 0) {
            this.head = this.head.next;
            return;
        }
        //node right before the removal node
        const previous = this.getAt(index - 1)
        //if there is no index in bounds of linkedlist
        if (!previous || !previous.next) { return }
        // set next to what will be the new next in the chain when next is removed
        previous.next = previous.next.next
    }
    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data)
            return
        }
        //inserting at existing head
        if (index === 0) {
            //passes in current head to a new node and assigns that node as head
            this.head = new Node(data, this.head)
        }
        const previous = this.getAt(index - 1) || this.getLast()
        const node = new Node(data, previous.next)
        previous.next = node
    }
}

module.exports = { Node, LinkedList };
