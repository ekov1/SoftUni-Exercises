/*
Write a JS function that prints the binary logarithm (log2 x) for each number in the input.
The input comes as array of string elements, each holding a number.
The output should be printed to the console, on a new line for each number.
 */

function binarylogarith(numbers) {
    for (let x of numbers) {
        if (x != 0)
            console.log(Math.log2(x));
    }
}