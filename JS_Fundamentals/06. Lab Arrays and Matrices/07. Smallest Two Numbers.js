function sort(arr) {
    arr = arr.map(Number);
    arr = arr.sort((a, b) => a - b);

    let result = arr[0] + " " + arr[1];
    return result;
}