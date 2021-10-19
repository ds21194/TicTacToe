const arraySum = (arr) => arr.reduce((sum, curr)=> sum+curr, 0);

const getRowsSum = (board) => board.map(row=>arraySum(row));

const rotate = (board) => board.map((row, i)=>row.map((col, j)=>board[j][i]));

const extractDiagonal = (board) => board.map((row, i)=>board[i][i]);

const extractAntidiagonal = (board) => board.map((row, i)=>board[board.length-1-i][i]);

const extractRow = (board, i) => board[i];

const extractCol = (board, j) => board.map(row=>row[j]);

// const contains = (arr, size)=> arr.reduce((accum, curr)=> accum || curr === size, false);

const isWinningRow = (row, player) => arraySum(row.map(p => p === player ? 1 : 0)) === row.length;

export const getWinningStrike = (board, player, i, j) => {
    // main idea - check the sum of 'sign' appearance on the rows, columns, main-diagonal and anti-diagonal
    // if it sums to the length of the board - we have a winner!

    const boardLength = board.length;

    const extractedRow = extractRow(board, i);
    const extractedCol = extractCol(board, j);

    if(isWinningRow(extractedRow, player))
        return extractedRow;

    if(isWinningRow(extractedCol, player))
        return extractedCol;

    if(i === j){
        const extractedDiagonal = extractDiagonal(board);
        if(isWinningRow(extractedDiagonal, player))
            return extractedDiagonal
    }

    if(i + j === boardLength-1){
        const extractedAntidiagonal = extractAntidiagonal(board);
        if(isWinningRow(extractedAntidiagonal, player))
            return extractedAntidiagonal
    }

    return null
};

export const isBoardFull = (board) => board.reduce(
    (rowAc, currRow)=>currRow.reduce(
        (colAc, currCol)=>colAc && currCol, true
    ) && currRow, true
);

