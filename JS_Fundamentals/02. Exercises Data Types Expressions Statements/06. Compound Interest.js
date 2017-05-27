/*
Compound Interest

Write a JS function that calculates the total accumulated value for a monetary deposit by given principal sum, 
interest rate, compounding frequency and overall length.
The input comes as an array of strings that need to be parsed as a numbers. The first value is the principal sum, 
the second is the interest rate in percent, the third is the compounding period in months and 
the final value is the total timespan, given in years.
The output should be printed to the console, with two decimal places.
*/

function compoundInterest(input) {
    let [principalSum, interest, compoundingPeriod, totalTimespan] = input.map(Number);
interest/=100;
let frequency = 12/compoundingPeriod;
    let F = principalSum * (Math.pow((1 + (interest / frequency)), (frequency * totalTimespan)));
    return F;
}