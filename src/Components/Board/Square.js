import React from 'react';
import classNames from "classnames";

import { useRecoilValue } from "recoil";
import {boardState} from "../../atoms/board";
import useMarker from "../../hooks/useMarker";

// const useSquare = (i, j) => {
//     const board = useRecoilState(boardState);
//     const setBoard = useSetRecoilState(boardState);
//
//
//
// };

const Square = ( { x, y }) => {

    const board = useRecoilValue(boardState);

    const setMark = useMarker(x, y);

    const mark = board[y][x];

    return (
        <div className={classNames('square', {taken: !!mark})}>
            <button disabled={!!mark} onClick={setMark}> {mark} </button>
        </div>
    )
};

export default Square
