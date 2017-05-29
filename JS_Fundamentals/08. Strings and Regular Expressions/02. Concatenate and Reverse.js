/*
Write a JS function that reverses a series of strings and prints them concatenated from last to first.
The input comes as an array of strings.
The output is printed on the console. Print all strings concatenated on a single line, 
starting from the last input string, going to the first. Reverse each individual string’s letters.
*/

function concatReverse(arrStrs) {
    let arrResult = [];
    for (let str of arrStrs) {
        let temp = str.split("");
        temp = temp.reverse();
        temp = temp.join("");
        arrResult.unshift(temp);
    }
    return arrResult.join("");
}

function concatReverse2(arrStrs) {
    let arrResult = [];
    for (let str of arrStrs) {
        let temp = "";
        for (let i = str.length - 1; i >= 0; i -= 1) {
            temp += str[i];
        }
        arrResult.unshift(temp);
    }
    return arrResult.join("");
}

function concatReverse3(arrStrs) {
    let arrResult = [];
    for (let str of arrStrs) {
        let temp = reverseString(str);

        arrResult.unshift(temp);
    }
    return arrResult.join("");

    function reverseString(str) {
        if (str === "") {
            return "";
        } else {
            return reverseString(str.substr(1)) + str.charAt(0);
        }
    }
}