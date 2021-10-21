import {useRecoilCallback, useRecoilValue, useRecoilState} from "recoil";
// import {Map} from 'immutable'
import {useCallback} from 'react'

import {
    turnState,
    lastPlayed,
    boardState,
    leaderboardState
} from "../atoms/board";


const useTicTacToe = () => {
    const lastPlayedMarker = useRecoilValue(lastPlayed)['marker'];
    const [leaderboard, setLeaderboard] = useRecoilState(leaderboardState);

    // new game
    const newGame = useRecoilCallback(({set, snapshot, reset})=>()=>{
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
        newGame();

        setLeaderboard({
            ...leaderboard,
            [lastPlayedMarker]: leaderboard[lastPlayedMarker] + 1
        });

    }, [lastPlayedMarker]);

    return [newGame, forfeit]
};

export default useTicTacToe


