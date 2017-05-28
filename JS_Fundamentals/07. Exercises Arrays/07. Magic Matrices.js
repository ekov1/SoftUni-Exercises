function magic(matrix) {
    // let newMatrix = matrix.map(row => row.split(' ').map(Number));
    // console.dir(matrix);
    
    let i = 0, j, sum = 0, checkSum = 0;

    for (j = 0; j < matrix[i].length; j += 1) {
        checkSum += matrix[i][j];
    }

    for (i = 0; i < matrix.length; i += 1) {
        for (j = 0; j < matrix[i].length; j += 1) {
            sum += matrix[i][j];
        }
        if (sum != checkSum) {
            return false;
        }
        sum = 0;
    }

    for (i = 0; i < matrix.length; i += 1) {
        for (j = 0; j < matrix[i].length; j += 1) {
            sum += matrix[j][i];
        }
        if (sum != checkSum) {
            return false;
        }
        sum = 0;
    }

    return true;
}