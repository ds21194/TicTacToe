import React from "react"
import { useRecoilValue } from 'recoil'
import useTicTacToe from '../../hooks/useTicTacToe'
import { boardState, winner } from "../../atoms/board"

import Square from "./Square";

import "./Board.css"


const Board = () => {
    const board = useRecoilValue(boardState);
    const gameWinner = useRecoilValue(winner);
    const [newGame, forfeit] = useTicTacToe();

    const hasWinner = gameWinner !== null;

    const onNewGame = () => {hasWinner ? newGame(gameWinner) : forfeit()};

    const boardWidth = board[0].length;

    return (
        <>
            <button onClick={onNewGame}> {hasWinner ? "New Game" : "Forfeit"} </button>
            <div className='board'>
                {board.map((row, rowIndex)=>(
                    <React.Fragment key={rowIndex}>
                        {row.map((mark, colIndex)=>(<Square
                            key={rowIndex*boardWidth + colIndex}
                            x={colIndex}
                            y={rowIndex}
                        />))}
                    </React.Fragment>
                ))}
            </div>
        </>
    )
};

export default Board
