// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        //null = this node by default has no children
        this.left = null;
        this.right = null;
    }
    //recursion is favored for insertion in BinarySTs
    insert(data) {
        if (data < this.data && this.left) {
            //recursion when there's already an existing left node
            //moving down the tree 
            this.left.insert(data);
        }
        //when new data is less than the current node but this.left is null
        //and you need to assign a new node to the left 
        else if (data < this.data) {
            this.left = new Node(data);
        }
        //this logic/process is symmetrical!
        else if (data > this.data && this.right) {
            this.right.insert(data)
        } else if (data > this.data) {
            this.right = new Node(data)
        }
    }
    contains(data) {
        if (this.data === data) {
            //returns entire node 
            return this
        }//if current node doesn't contain the data 
        //and we need to go down and right
        if (this.data < data && this.right) {
            //remember to return recursions
            return this.right.contains(data)
            //down and left
        } else if (this.data > data && this.left) {
            return this.left.contains(data)
        } //in case some data arg does not exist in tree 
        return null
    }
}
module.exports = Node;
