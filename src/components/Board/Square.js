import React from 'react';
import classNames from "classnames";

import { useRecoilValue } from "recoil";
import {boardState, winner} from "../../atoms/board";
import useMarker from "../../hooks/useMarker";

import './Board.css'

const Square = ( { x, y }) => {

    const board = useRecoilValue(boardState);
    const isWon = useRecoilValue(winner) !== null;

    const setMark = useMarker(x, y);

    const mark = board[y][x];

    return (
        <div className={classNames('square', {taken: !!mark})}>
            <button disabled={!!mark || isWon} onClick={setMark}> {mark} </button>
        </div>
    )
};

export default Square
