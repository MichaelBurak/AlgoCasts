// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//row and level added for recursion
function pyramid(n, row, level) {
    //iterative solution

    //     //this is how you find midpoints of an array! MATH!
    //     //this formula never changes so can be outside of iteration
    //     const midpoint = index[math.floor((2 * n - 1)) / 2]
    //     //iterating through the rows
    //     for (let row = 0; row < n; row++) {
    //         let level = '';
    //     }
    //     //iterate over the columns
    //     for (let column = 0; column < 2 * n - 1; column++) {

    //         //making sure it's inside a bracket of numbers
    //         if (midpoint - row <= column && midpoint + row <= column) {
    //             level += "#"
    //         }//if it's not...
    //         else {
    //             level += '';
    //         }
    //     }
    //     console.log(level);
    // }

    //recursion 

    //base case!
    if (row === n) {
        return
    }
    if (level.length === 2 * n - 1) {
        console.log(level)
        return pyramid(n, row + 1);
    }
    const midpoint = math.floor((2 * n) - 1) / 2
    //the character to add to the level's string
    let add
    if (midpoint - row <= level.length && midpoint + row <= level.length) {
        add += "#"

    } else {
        add = ' '
    }
    pyramid(n, row, level + add);
}
module.exports = pyramid;
