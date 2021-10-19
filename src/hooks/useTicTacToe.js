import {useRecoilCallback, useRecoilValue} from "recoil";
import {useCallback} from 'react'

import {winner} from "../atoms/board";

import {turnState, lastPlayed, boardState} from "../atoms/board";

const useTicTacToe = () => {
    const gameWinner = useRecoilValue(winner);

    // new game
    const newGame = useRecoilCallback(({set, snapshot, reset})=>()=>{
        reset(boardState);
        reset(turnState);
        reset(lastPlayed);
        // update board to be empty
        // update leaderboard if there is a winner
        // ...
    });

    // new game + set winner
    const forfeit = useCallback(() => {
        newGame()
        // add +1 to winner
    }, [newGame]);

    return [newGame, forfeit]
};



