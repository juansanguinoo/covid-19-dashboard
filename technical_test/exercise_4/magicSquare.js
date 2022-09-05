const magicSquare = (n) => {

  let square = Array(n).fill().map(() => Array(n).fill(0));
  let row = 0;
  let col = Math.floor(n / 2);
  let num = 1;

  while (num <= n * n) {
    square[row][col] = num;
    num++;
    let nextRow = row - 1;
    let nextCol = col + 1;
    if (nextRow < 0) {
      nextRow = n - 1;
    }
    if (nextCol > n - 1) {
      nextCol = 0;
    }
    if (square[nextRow][nextCol] !== 0) {
      col++;
    } else {
      row = nextRow;
      col = nextCol;
    } 
    
  }
  return square;
}

console.log(magicSquare(5));
