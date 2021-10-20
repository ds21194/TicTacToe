import {useRecoilCallback, useRecoilState, useRecoilValue} from "recoil";
import {useCallback, useEffect} from 'react'

import {
    winner,
    winnerState,
    leaderboardState,
} from "../atoms/board";

const useLeaderboard = () => {
    const [gameWinner, setGameWinner] = useRecoilState(winner);
    const leaderboard = useRecoilValue(leaderboardState);
    console.log("winner: ", gameWinner);

    useEffect(()=>{
        setGameWinner(gameWinner)
    });

    const updateLeaderboard = useRecoilCallback(({set, reset})=>()=> {
        if(gameWinner !== null){
            set(leaderboardState, leaderboard=>({
                ...leaderboard,
                [gameWinner]: leaderboard[gameWinner] + 1
            }));
            reset(winner);
        }
    }, [gameWinner]);

    return [leaderboard, updateLeaderboard]
};


export default useLeaderboard
