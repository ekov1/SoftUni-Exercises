/*
Write a JS function to check whether a year is leap. Leap years are either divisible by 4 but not by 100 or are divisible by 400.
The input comes as array of one string element, holding a number.
The output should be printed to the console. Print yes if the year is leap and no otherwise.

 */

function isLeap(years) {
    let year = Number(years[0]);
    if ((year % 100 !== 0 && year % 4 === 0) || year % 400 === 0) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

function isLeapYear(y) {
     y = Number(y[0]);
    return (
        (y % 4 == 0 && y % 100 != 0) || (y % 400 == 0)
        ) ? "yes" : "no";
}