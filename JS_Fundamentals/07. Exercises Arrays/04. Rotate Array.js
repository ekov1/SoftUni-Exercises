function rotateArray(arr) {
    let rotations = arr[arr.length - 1];
    arr.pop();

    while (rotations > 0) {
        arr.unshift(arr[arr.length - 1]);
        arr.pop();
        rotations -= 1;
    }

    return arr.join(" ");
}