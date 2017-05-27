/*
Distance in 3D

Write a JS function that calculates the distance between the two points in 3D by given coordinates.
The input comes as an array of strings that need to be parsed as numbers. 
The first three elements are the x, y and z coordinates for the first point and the second set of arguments 
are the coordinates of the other point.
The output should be printed to the console.
*/

function dist3D(input) {
    let [x1, y1, z1, x2, y2, z2] = input.map(Number);

    let d = Math.sqrt(((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1) + (z2 - z1) * (z2 - z1)));
    return d;
}