// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    //shows difference between queue and stack, challenges involved
    //create two stacks and fake the behavior of a queue - pseudoqueue
    //with add, remove, peek
    //storage of record WITHOUT ARRAY, as STACKS. Stack1 + S2 = Q
    //internalize solution, 'seen it or you haven't' type question ala fibonaccis

    //reminder = making a Queue using stacks defaults to the Queue behavior where 
    //the first record added is the first removed(first in first out/FIFO)
    //you want the mirrored element to be touched with only removal and adding 
    //from top of stack available 

    //how to do this within limits? !pop from S1, push to s2, peek, repeat!

    //when you hit an empty on peek, you want the next record out of s2, so pop
    //basically move everything s1 --> s2, pop and then restore back to s1
    //peek s2 --> push to s1 --> peek

    //this is very inefficient but demonstrates knowledge of Q v S

    constructor() {
        //create two stacks and assign to instance
        this.first = new Stack();
        this.second = new Stack();
    }
    add(r) {
        this.first.push(r)
    }
    remove() {
        //bulk of logic in here
        //iterate through all of first with peek
        //run while loop while first has elements
        while (this.first.peek()) {
            //grab and move records from f --> s 
            const rec = this.first.pop()
            this.second.push(rec)
            //clearer syntax, but this.second.push(this.first.pop()) is more efficient.
        }
        const returRec = this.second.pop()
        //return from s --> f while s contains el
        while (this.second.peek()) {
            this.first.push(this.second.pop())

        } return returRec
    } peek() {
        while (this.first.peek()) {
            this.second.push(this.first.pop())
        }
        const pRec = this.second.peek()
        while (this.second.peek()) {
            this.first.push(this.second.pop())
        }
        return pRec
    }
}

module.exports = Queue;
