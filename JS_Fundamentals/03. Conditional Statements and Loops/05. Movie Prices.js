/*
Movie Prices

Write a JS function that calculate the ticket price by movie title and day of week.
The input comes as array of 2 strings. The first string holds the movie title. The second string holds the day of week.
The output should hold the ticket price or “error” if the title or day of week is invalid.
*/

function movie([title, day]) {
    title = title.toLowerCase();
    day = day.toLowerCase();
    let result;
    if (title === "the godfather") {
        switch (day) {
            case "monday": result = 12; break;
            case "tuesday": result = 10; break;
            case "wednesday": result = 15; break;
            case "thursday": result = 12.50; break;
            case "friday": result = 15; break;
            case "saturday": result = 25; break;
            case "sunday": result = 30; break;
            default: result = "error"; break;
        }
    }
    if (title === "schindler's list") {
        switch (day) {
            case "monday": result = 8.50; break;
            case "tuesday": result = 8.50; break;
            case "wednesday": result = 8.50; break;
            case "thursday": result = 8.50; break;
            case "friday": result = 8.50; break;
            case "saturday": result = 15; break;
            case "sunday": result = 15; break;
            default: result = "error"; break;
        }
    }
    if (title === "casablanca") {
        switch (day) {
            case "monday": result = 8; break;
            case "tuesday": result = 8; break;
            case "wednesday": result = 8; break;
            case "thursday": result = 8; break;
            case "friday": result = 8; break;
            case "saturday": result = 10; break;
            case "sunday": result = 10; break;
            default: result = "error"; break;
        }
    }
    if (title === "the wizard of oz") {
        switch (day) {
            case "monday": result = 10; break;
            case "tuesday": result = 10; break;
            case "wednesday": result = 10; break;
            case "thursday": result = 10; break;
            case "friday": result = 10; break;
            case "saturday": result = 15; break;
            case "sunday": result = 15; break;
            default: result = "error"; break;
        }
    }
    return result;
}