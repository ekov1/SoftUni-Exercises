/*
Write a JS function to calculate a cone’s volume and surface area by given height and radius at the base.
The input comes as array of two string elements, each holding a number. 
The first element is the cone’s radius and the second is its height.
The output should be printed to the console on a new line for every result.
*/

function calcAVcone([r, h]) {
    r = +r;
    h = +h;
    let volume = (Math.PI * r * r * h) / 3;
    console.log("volume = " + volume);

    let l = Math.sqrt((r * r) + (h * h));
    let surfaceArea = Math.PI * r * (r + l);
    console.log("area = " + surfaceArea);
}

function cone(input) {
    let [r, h] = input.map(Number);

    let volume = (Math.PI * r * r * h) / 3;
    console.log("volume = " + volume);

    let l = Math.sqrt((r * r) + (h * h));
    let surfaceArea = Math.PI * r * (r + l);
    console.log("area = " + surfaceArea);
}