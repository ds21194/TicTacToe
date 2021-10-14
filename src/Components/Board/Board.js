import React from "react"
import { useRecoilValue } from 'recoil'

import { boardState } from "../../atoms/board"

import Square from "./Square";

import "./Board.css"


const Board = () => {
    const board = useRecoilValue(boardState);

    return (
        <div className='board'>
            {board.map((row, rowIndex)=>(
                <>
                    {row.map((mark, colIndex)=>(<Square x={colIndex} y={rowIndex} />))}
                </>
            ))}
        </div>
    )
};

export default Board
