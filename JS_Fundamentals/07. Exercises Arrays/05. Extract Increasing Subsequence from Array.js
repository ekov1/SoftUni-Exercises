function extract(arr) {
    let biggest = Number.NEGATIVE_INFINITY;
    for (let num of arr) {
        if (biggest <= num) {
            biggest = num;
            console.log(num);
        }
    }
}

function ext(arr) {
    let big = Number.NEGATIVE_INFINITY;
    arr.filter(
        a => (function () { if (a >= big) { big = a; console.log(a); } })()
    );
}