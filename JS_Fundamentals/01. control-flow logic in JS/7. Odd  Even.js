function OddOrEven(input) {
    result = "";
    a = +input[0];
    let int = a - Math.floor(a);
    if (int > 0) {
        result = "invalid";
    } else {
        if (a % 2 === 0 || a === 0) {
            result = "even";
        } else {
            result = "odd";
        }
    }
    return result;
}