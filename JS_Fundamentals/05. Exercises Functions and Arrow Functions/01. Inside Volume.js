
function inBox(input) {
    let numbers = [],
        i = 0;
    numbers = input.map(parseFloat);
    // while (numbers[i]) {
    //     console.log(numbers[i]);
    //     i += 1;
    // }
    for (i = 0; i < numbers.length - 1; i += 3) {
        let [x, y, z] = [numbers[i], numbers[i + 1], numbers[i + 2]];
        isInside([x, y, z]);
    }

    function isInside([x, y, z]) {
        if (x < 10 || 50 < x || y < 20 || 80 < y || z < 15 || 50 < z) {
            console.log("outside");
        } else {
            console.log("inside");
        }
    }
}