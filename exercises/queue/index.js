// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
        this.data = []
    }
    //always add into the FRONT 
    add(record) {
        //this is core js array method to add to front, mutation
        this.data.unshift(record)
    }
    //remove from END AND RETURN so it can be worked with
    remove(record) {
        //core JS 
        return this.data.pop(record)
    }
}

module.exports = Queue;
