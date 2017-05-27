/*
Write a JS function to check if a number is prime (only wholly divisible by itself and one).
The input comes as array of one string element, holding the number.
The output should be the return value of your function. Return true for prime number and false otherwise.
*/

function isPrime(number) {
    number = +number[0];
    let prime = true;
    for (let d = 2; d <= Math.sqrt(number); d += 1) {
        if (number % d === 0) {
            prime = false;
            break;
        }
    }
    return prime && (number > 1);

}