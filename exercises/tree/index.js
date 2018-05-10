// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
    add(data) {
        this.children.push(new Node(data))
    }

    remove(data) {
        this.children = this.children.filter(node => {
            //return true for every element that is not 'data', removes every
            //non match, does not mutate original array except
            //that it is explicitly setting this.children!
            return node.data !== data
        })
    }
}

class Tree {
    constructor() {
        this.root = null

    }
    traverseBF(fn) {
        //puts root node in array to iterate over
        const arr = [this.root]
        //while the array has something in it 
        while (arr.length) {
            //shift = base array method that takes out 1st element
            const node = arr.shift();
            //sadly node.children is an array, so would produce a nested array if 
            //pushed
            arr.push(...node.children);
            fn(node);
        }
    }
    traverseDF(fn) {
        const arr = [this.root];
        while (arr.length) {
            const node = arr.shift()
            //adds to front of the array
            arr.unshift(...node.children)
            fn(node)
        }
    }
}


module.exports = { Tree, Node };
