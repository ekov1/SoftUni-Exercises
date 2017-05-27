function cookingByNumbers(input) {
    let number = +input[0];

    function cook(action) {
        switch (action) {
            case "chop":
                number /= 2;
                console.log(number);
                break;
            case "dice":
                number = Math.sqrt(number);
                console.log(number);
                break;
            case "spice":
                number += 1;
                console.log(number);
                break;
            case "bake":
                number *= 3;
                console.log(number);
                break;
            case "fillet":
                let twentyPercent = (number / 100) * 20;
                number -= twentyPercent;
                console.log(number);
                break;
        }
    }

    for (let i = 1; i < input.length; i += 1) {
        cook(input[i]);
    }
}