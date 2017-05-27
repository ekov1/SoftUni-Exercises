function odd(arr) {
    arr = arr.map(Number);

    let result = arr
        .filter((num, i) => i % 2 == 1)
        .map(num => num * 2)
        .reverse();

    return (result.join(' '));
}

function odd2(arr) {
    let result = arr
        .filter((num, i) => i % 2 == 1)
        .map(x => 2 * x)
        .reverse();
    return result.join(' ');
}