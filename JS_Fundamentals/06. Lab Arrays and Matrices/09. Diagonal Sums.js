function diagonalSums(matrixRows) {

  //  let matrix = matrixRows.map(row => row.split(' ').map(Number));
 
    let mainSum = 0, secindarySum = 0;

    for (let row = 0; row < matrix.length; row += 1) {
        mainSum += matrix[row][row];
        secindarySum += matrix[row][matrix.length - row - 1];
    }

    console.log(mainSum + ' ' + secindarySum);
}