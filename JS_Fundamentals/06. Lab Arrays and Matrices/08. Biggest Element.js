function biggestElement(arr) {
    let currentBig,
        biggest = -0.1 / 0;

    for (let a of arr) {
        a = a.map(Number);
        a = a.sort((a, b) => b - a);
        currentBig = a[0];

        if (currentBig > biggest)
            biggest = currentBig;
    }

    return biggest;
}

function returnBiggest(arr) {
    let newArr = arr.map(row => row.split(" ").map(Number));

    let biggestNum = Number.NEGATIVE_INFINITY;

    newArr.forEach(
        row => row.forEach(
            currentNumber => biggestNum = Math.max(biggestNum, currentNumber)
        )
    );

    return biggestNum;
}

