/* 
Write a JS function that calculates a triangle’s area by its 3 sides.
The input comes as array of three string elements, each holding a number, representing one side of a triangle.
The output should be printed to the console.

*/

function findTriangleArea(sides) {
    let a = Number(sides[0]),
        b = Number(sides[1]),
        c = Number(sides[2]),
        sp = (a + b + c) / 2,
        S = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));

    return S;
}

function findA([a, b, c]) {
    [a, b, c] = [a, b, c].map(Number);
    let sp = (a + b + c) / 2,
        S = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));

    return S;
}

function findArea([a, b, c]) {
    a = +a; b = +b; c = +c;
    let sp = (a + b + c) / 2,
        S = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));

    return S;
}