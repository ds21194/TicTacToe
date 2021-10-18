import {useRecoilCallback, useRecoilValue} from "recoil";
import {useCallback} from 'react'

import {winner} from "../atoms/board";


const useTicTacToe = () => {
    const gameWinner = useRecoilValue(winner);

    // new game
    const newGame = useRecoilCallback(({set, snapshot})=>()=>{
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



