/*
Binary to Decimal

Write a JS function that reads an 8-bit binary number and converts it to a decimal.
The input comes as an array of one string element, representing a binary number.
The output should be printed to the console.
*/

function bin2Dec(binary) {
    var digit = parseInt(binary, 2);
    console.log(digit);
}

function binryToDecimal([binary]) {
    // console.log(binary);
    binary = binary.split("");
    // console.log(binary);
    binary = binary.reverse();
    //  console.log(binary);
    let result = 0;

    for (let i = 0; i < binary.length; i += 1) {
        result += (parseInt(binary[i]) * Math.pow(2, i));
    }
    return result;
}