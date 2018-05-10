// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    //whenever you see width, think of using breadth-first first!
    //generally you will have to write a function to  traverse AND 
    //do work while traversing in interviews, not just a BF or DF traverse

    //array with root and stopper init
    const arr = [root, 's']
    //to count width, could also be called 'width'
    const counters = 0

    while (arr.length > 1) {

        //pull out next element
        const node = arr.shift()
        if (node === 's') {
            //signifies moving on to another row
            counters.push(0)
            //returns stopper to end of array
            arr.push('s')
        } else {
            //add node's children to array if node
            arr.push(...node.children)
            //find last element, increment by one as last element is current level width
            counters[counters.length - 1]++
        }
    }
    return counters
}

module.exports = levelWidth;