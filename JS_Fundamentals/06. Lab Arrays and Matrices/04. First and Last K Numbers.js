function print(arr) {
    arr = arr.map(Number);

    let result = [],
        k = arr[0],
        i;

    for (i = 1; i <= k; i += 1) {
        result.push(arr[i]);
    }

    console.log(result.join(" "));
    result = [];

    for (i = arr.length - k; i < arr.length; i += 1) {
        result.push(arr[i]);
    }

    console.log(result.join(" "));
}

function firstLastKElements(arr) {
    let k = Number(arr.shift());

    console.log(arr.slice(0, k).join(" "));
    console.log(arr.slice(arr.length - k, arr.length).join(" "));
}