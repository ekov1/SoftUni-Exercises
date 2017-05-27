/*
Last Month

Write a JS function that receives a date as array of strings containing day, month and year in that order. 
Your task is to print the last day of previous month (the month BEFORE the given date). 
Check the examples to better understand the problem.
The input comes as an array of string elements.
The output should be a single number representing the last day of the previous month.
*/
function lastMonth(date) {
    let month = +date[1],
        year = +date[2],
        lastDay;
    switch (month) {
        case 1: {
            lastDay = 31; break;
        }
        case 2: {
            lastDay = 31; break;
        }
        case 3: {
            lastDay = 28; break;
        }
        case 4: {
            lastDay = 31; break;
        }
        case 5: {
            lastDay = 30; break;
        }
        case 6: {
            lastDay = 31; break;
        }
        case 7: {
            lastDay = 30; break;
        }
        case 8: {
            lastDay = 31; break;
        }
        case 9: {
            lastDay = 31; break;
        }
        case 10: {
            lastDay = 30; break;
        }
        case 11: {
            lastDay = 31; break;
        }
        case 12: {
            lastDay = 30; break;
        }
    }

    if ((year % 100 !== 0 && year % 4 === 0) || year % 400 === 0) {
        if (month === 2) lastDay = 29;
    }

    return lastDay;
}

function lastDay([day, month, year]) {
    [day, month, year] = [day, month, year].map(Number);
    let date = new Date(year, month - 1, 0);
    return date.getDate();
}