function calendar([day, month, year]) {
    // TODO: return the HTML text holding the calendar table
    [day, month, year] = [day, month, year].map(Number);

    let firsDayofMonth = new Date(year, month - 1, 1),
        firstDate = new Date(firsDayofMonth);

    firstDate.setDate(firsDayofMonth.getDate() - firsDayofMonth.getDay());
    console.log(firstDate);

    let lastDateOfCalendar = new Date(firsDayofMonth);
    lastDateOfCalendar.setMonth(lastDateOfCalendar.getMonth() + 1);
    lastDateOfCalendar.setDate(0);
    console.log(lastDateOfCalendar);
}