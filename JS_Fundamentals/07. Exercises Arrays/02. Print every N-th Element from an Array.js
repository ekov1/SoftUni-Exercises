function print(arr) {
    let n = arr[arr.length - 1];
    arr.pop();

    let result = arr.filter((num, i) => i % n === 0);
    for(let num of result){
        console.log(num);
    }
}