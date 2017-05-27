function solve(n, k) {
    let array = [];
    array[0] = 1;
    let i, j, sum = 0;
    for (let i = 1; i < n; i += 1) {
        if (i >= k) {
            sum = 0;
            for (j = 1; j <= k; j += 1) {
                sum += array[i - j];
            }
            array.push(sum);
        } else {
            sum = 0;
            for (j = 0; j < i; j += 1) {
                sum += array[j];
            }
            array.push(sum);
        }
    }

    console.log(array.join(' '));
}

//function 