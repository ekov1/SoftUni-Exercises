function Катаджия([speed, area]) {
    speed = +speed;

    let infraction;
    let limits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    };

    function infractionCalculator(speed, limit) {
        let output = "";
        if (limit + 40 < speed) {
            output = "reckless driving";
        }
        else if (limit + 20 < speed && speed <= limit + 40) {
            output = "excessive speeding";
        }
        else if (limit < speed && speed <= limit + 20) {
            output = "speeding";
        }
        console.log(output);
    }

    switch (area) {
        case "city": infractionCalculator(speed, limits.city); break;
        case "residential": infractionCalculator(speed, limits.residential); break;
        case "interstate": infractionCalculator(speed, limits.interstate); break;
        case "motorway": infractionCalculator(speed, limits.motorway); break;
    }
}