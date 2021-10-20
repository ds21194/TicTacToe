import {useRecoilCallback, useRecoilValue} from "recoil";
// import {Map} from 'immutable'
import {useCallback} from 'react'

import {
    turnState,
    lastPlayed,
    boardState,
    leaderboardState, playersState
} from "../atoms/board";


const useTicTacToe = () => {
    const lastPlayedMarker = useRecoilValue(lastPlayed)['marker'];

    // new game
    const newGame = useRecoilCallback(({set, snapshot, reset})=>(winner)=>{
        console.log("winner is: ", winner);

        // set(leaderboardState, (leaderboard) => ({
        //     ...leaderboard,
        //     [winner]: leaderboard[winner] + 1
        // }));

        reset(boardState);
        reset(turnState);
        // reset(lastPlayed);
    });

    // new game + set winner
    const forfeit = useCallback(() => {
        newGame(lastPlayedMarker)

    }, [lastPlayedMarker, newGame]);

    return [newGame, forfeit]
};

export default useTicTacToe


