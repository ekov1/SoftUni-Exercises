function addRemove(choices) {
    let number = 1,
        array = [],
        i, j,
        choice;

    for (i = 0; i < choices.length; i += 1) {
        choice = choices[i];
        if (choice === "add") {
            array.push(number);
            number += 1;
        } else if (choice === "remove") {
            array.pop();
            number += 1;
        }
    }

    for (let num of array) {
        console.log(num);
    }

    if (array.length == 0)
        console.log('Empty');
}