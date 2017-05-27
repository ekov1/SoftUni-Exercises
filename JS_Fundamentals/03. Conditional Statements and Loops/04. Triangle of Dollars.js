/*
Triangle of Dollars

Write a JS function that prints a triangle of n lines of “$” characters like shown in the examples.
The input comes as array of strings. Its first element holds the number n (0 < n < 100).
The output consists of n text lines.
*/

function triangle([n]) {
    let dollar = "$",
        i,
        j,
        result;

    for (i = 1; i <= n; i += 1) {
        result = "";

        for (j = 1; j <= i; j += 1) {
            result += dollar;
        }

        console.log(result);
    }
}