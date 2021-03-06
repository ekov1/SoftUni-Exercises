/*
Quadratic Equation

Write a JS function to solve a quadratic equation by given in standard form as its coefficients: a, b, c.
You may learn more about quadratic equations here: https://www.mathsisfun.com/algebra/quadratic-equation.html.

The input comes as array of strings. Its holds the string representations of 3 real numbers: a, b and c. 
The value of a will be non-zero.

The output depends on the equation:
It holds two numbers x1 and x2 if the equation has two different solutions (roots): x1 and x2.
First print the smaller root, then the greater.
It holds a single number x if the equation has only one solution (root): x.
It holds the text “No” if the equation has no solutions (no real roots).
*/

function quadraticEquation(input) {
    let [a, b, c] = input.map(Number);
    let result;

    let D = Math.pow(b, 2) - (4 * a * c);

    if (D < 0) {
        console.log("No");
    }
    else if (D === 0) {
        result = (-b) / (2 * a);
        console.log(result);
    }
    else {
        result = ((-b) - Math.sqrt(D)) / (2 * a);
        console.log(result);
        result = ((-b) + Math.sqrt(D)) / (2 * a);
        console.log(result);
    }
}