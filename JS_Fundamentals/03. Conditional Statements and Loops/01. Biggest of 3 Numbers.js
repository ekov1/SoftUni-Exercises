/*
Biggest of 3 Numbers

Write a JS function that finds the biggest of 3 numbers.
The input comes as array of strings, where each element holds a number.
The output is the biggest from the input numbers.
*/
function big3(input) {
    let [num1, num2, num3] = input.map(Number);
    return Math.max(num1, num2, num3);
}

function biggest(input) {
    let biggest = -Infinity,
        temp;
    for (let i = 0; i < input.length; i += 1) {
        temp = parseFloat(input[i]);
        if (temp > biggest)
            biggest = temp;
    }
    return biggest;
}