import React from 'react';
import classNames from "classnames";
import { useRecoilValue, useRecoilState } from 'recoil'
import { playersState, turnState, winner, leaderboardState } from '../../atoms/board';
import { useEffect } from 'react'
import useLeaderboard from "../../hooks/useLeaderboard";
import './Leaderboard.css'

const Player = ({mark}) => {

    const currentPlayer = useRecoilValue(turnState);
    const [gameWinner, setGameWinner] = useRecoilState(winner);

    const [leaderboard, updateLeaderboard] = useLeaderboard();

    useEffect(()=>{
        updateLeaderboard();
    }, [updateLeaderboard]);

    const playerClasses = classNames('player', {
        current: mark === currentPlayer && ! gameWinner,
        winner: gameWinner === mark
    });

    return (
        <div className={playerClasses}>
            <span className='name'>
                {mark}
            </span>
            <span className='name score'>
                {leaderboard[mark]}
            </span>
        </div>
    )
};

const Leaderboard = () => {
    const gamePlayers = useRecoilValue(playersState);

    return (
        <div className='leaderboard'>
            {gamePlayers.map((player, index)=>(
                <Player key={index} mark={player} />
            ))}
        </div>
    )
};


export default Leaderboard

