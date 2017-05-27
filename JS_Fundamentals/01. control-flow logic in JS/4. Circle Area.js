/*
Write a JS function that calculates circle area by given radius. 
Print the area as it is calculated and then print it rounded to two decimal places.
The input comes as array of one string element, holding a number.
The output should be printed to the console on a new line for each result.

S=Pi*r^2
*/

function areaOfCircle(r) {
    r = Number(r[0]);
    let s = Math.PI * r * r;

    console.log(s);
    console.log(Math.round(s * 100) / 100);
}