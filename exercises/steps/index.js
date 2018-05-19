// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//row and stair added in for recursion, keep a reasonable default!
function steps(n, row = 0, stair = '') {
    //iterative solution
    //really try to write pseudocode before doing white boards! 

    //like these comments basically

    //iterate over the rows until n 

    //     for (let row = 0; row < n; row++){
    //         let stair = '';
    //         //iterate through columns
    //         for ( let column = 0; column < n; column ++){
    //             if (column <= row){
    //                 stair += '#';
    //             }
    //             else {//a space, not an emptry string
    //                 stair = ' '
    //             }
    //         }
    //         //make sure to end up with n no. of stairs logged
    //         console.log(stair)
    //     }
    // }

    //recursive

    //if row === n, then you're done(base case)
    //if stair.length() === n, you're done...with a row!
    //if length is less than or equal to n, add a space, otherwise a #

    //recursion methodology is challenging to explain, it's more important to find 
    //base case and then implementation is much easier 

    //base case
    if (n === row) {
        return;
    }
    if (n === stair.length) {
        console.log(stair)

        //what's left is thinking about changes and the recursive call here
        //how/when to increment row - when to hit end of stair
        //or the if statement above!
        //that's when to call steps, and move to next row(inc)
        return steps(n, row + 1)
        //this sets it so the next row's stair is an empty string to start
        //since it defaults due to no input in args
    }
    //what about when you're assembling the stair string?
    //how to do that?

    if (stair.length <= row) {
        stair += '#'
    } else {
        stair += ' ';
    }
    const add = stair.length <= row ? "#" : ''
    //working on the same row, but with a new stair value
    steps(n, row, stair)
}

module.exports = steps;

//recursion example - pass function a number, print down from it to 0

// function printNumber(n){
//     //base case is when you hit 0! super important to have base case.
//     if (n === 0){
//         return;
//     }
//     //after checking, do work, call function again
//     console.log(n); 
//     //make sure to change the arguments on recursive call, lest infinite loop
//     //the proper recursive step -
//     printNumber(n -1)
// }
//     //always identify base case - when you're done with recurse

//get bare minimum piece of information that says 'you've done it', here: n
//reasonable defaults to said pieces(n, dec for ex - you'd want to set dec to 
//likely 1)
//make sure those no extra work to be done when you hit base case 
//always make sure arguments have changed values

// //would produce 10, 9...etc, 0
// printNumber(10)