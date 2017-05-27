function equalNeighborsCount(matrix) {
    let i, j, br = 0;

    for (i = 0; i < matrix.length; i += 1) {
        for (j = 0; j < matrix[i].length; j += 1) {
            if(i < matrix.length-1)
            if (matrix[i][j] == matrix[i + 1][j]) br += 1;
            if (matrix[i][j] == matrix[i][j + 1]) br += 1;
        }
    }
    console.log(br);
}

equalNeighborsCount([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
])