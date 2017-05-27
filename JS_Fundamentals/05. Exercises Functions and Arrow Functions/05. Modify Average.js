function modifyAverage(number) {
    number = number.toString();

    let digits = [],
        i = 0;

    digits = number.split("");

    // while (digits[i]) {
    //     console.log(digits[i]);
    //     i += 1;
    // }
    let sum = 0,
        numLength = digits.length;
    //console.log(numLength);
    for (i = 0; i < numLength; i += 1) {
        sum += Number(digits[i]);
    }
    let avg = sum / numLength;
    //console.log(avg);

    while (avg < 5) {
        number += "9";
        numLength += 1;
        avg = (avg + 9) / numLength;
    }
    return number;
}