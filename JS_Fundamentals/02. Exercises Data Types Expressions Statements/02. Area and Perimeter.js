/*
Write a JS function that calculates the area and perimeter of a rectangle by given two sides.
The input comes as array of strings that need to be parsed as numbers.
The output should be printed to the console on two lines.
*/
//sides = ["a","b"];
function calcPS(sides) {
    let a = +sides[0],
        b = +sides[1],
        p = 2 * (a + b),
        S = a * b;

    console.log(S);
    console.log(p);
}