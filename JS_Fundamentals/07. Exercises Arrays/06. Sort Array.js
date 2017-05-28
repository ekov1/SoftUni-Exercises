/*
Write a JS function that orders a given array of strings, by length in ascending order as primary criteria, and by

alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.

The input comes as array of strings.
*/

function sort(arr) {
    for (let str of arr) {
        str.toLowerCase();
    }

    arr.sort().sort((a, b) => (a.length - b.length));

    for (let str of arr) {
        console.log(str);
    }
}