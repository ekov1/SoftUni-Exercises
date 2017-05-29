/*
Write a JS function that prints all the symbols of a string, each on a new line.
The input comes as a single string argument.
The output is printed on the console, each letter on a new line.
*/

function printStringLetters(str) {
    if (Array.isArray(str)) {
        str = str[0];
    }
    for (let i in str) {
        console.log(`str[${i}] -> ${str[i]}`);
    }
}