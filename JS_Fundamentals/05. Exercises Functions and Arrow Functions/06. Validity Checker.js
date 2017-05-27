function isInteger([x1, y1, x2, y2]) {
    let result1 = `{${x1}, ${y1}} to {0, 0} is `,
        result2 = `{${x2}, ${y2}} to {0, 0} is `,
        result3 = `{${x1}, ${y1}} to {${x2}, ${y2}} is `;

    [x1, y1, x2, y2] = [x1, y1, x2, y2].map(Number);

    function findC(x, y, result) {
        let c = Math.sqrt((x * x) + (y * y));
        if (Number.isInteger(c)) {
            result += "valid";
        } else {
            result += "invalid";
        }
        console.log(result);
    }

    function findX(x1, y1, x2, y2, result) {
        let x = Math.sqrt(((x1 - x2) * (x1 - x2)) + ((y1 - y2) * (y1 - y2)));
        if (Number.isInteger(x)) {
            result += "valid";
        } else {
            result += "invalid";
        }
        console.log(result);
    }

    findC(x1, y1, result1);
    findC(x2, y2, result2);
    findX(x1, y1, x2, y2, result3);
}