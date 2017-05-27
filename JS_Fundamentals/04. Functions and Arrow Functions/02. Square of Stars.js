function printSquare(n) {
    //let n = +input[0];
    function printStars(count = 5) {
        console.log('* '.repeat(count));
    }

    for (let row = 1; row <= n; row += 1) {
        printStars(n);
    }
    
}