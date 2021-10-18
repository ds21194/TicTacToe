const arraySum = (arr) => arr.reduce((sum, curr)=> sum+curr, 0);

const getRowsSum = (board) => board.map(row=>arraySum(row));

const rotate = (board) => board.map((row, i)=>row.map((col, j)=>board[j][i]));

const extractDiagonal = (board) => board.map((row, i)=>board[i][i]);

const extractAntidiagonal = (board) => board.map((row, i)=>board[board.length-1-i][i]);

const contains = (arr, size)=> arr.reduce((accum, curr)=> accum || curr === size, false);

export const hasWinner = (board, player) => {
    // main idea - check the sum of 'sign' appearance on the rows, columns, main-diagonal and anti-diagonal
    // if it sums to the length of the board - we have a winner!

    const boardLength = board.length;
    const convertedBoard = board.map(row=>row.map(col=>col === player ? 1 : 0));

    const rowsSum = getRowsSum(convertedBoard);
    const colsSum = getRowsSum(rotate(convertedBoard));
    const diagonalSum = arraySum(extractDiagonal(convertedBoard));
    const antidiagonalSum = arraySum(extractAntidiagonal(convertedBoard));

    if(diagonalSum === boardLength || antidiagonalSum === boardLength)
        return player;

    if(contains(rowsSum, boardLength) || contains(colsSum, boardLength))
        return player;

    return null
};



