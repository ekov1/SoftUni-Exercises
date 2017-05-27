function printTriangle(n) {
    //let n = +input[0];
    function printStars(count) {
        console.log('*'.repeat(count));
    }

    for (let row = 1; row <= n; row += 1) {
        printStars(row);
    }
    for (let row = (n - 1); row >= 1; row -= 1) {
        printStars(row);
    }
}