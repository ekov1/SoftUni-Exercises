function repeat(string, repetitions) {
    let result = "";
    for (let i = 0; i < repetitions; i += 1) {
        result += string;
    }
    return result;
}