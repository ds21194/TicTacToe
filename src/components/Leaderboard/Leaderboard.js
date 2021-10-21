import React from 'react';
import classNames from "classnames";
import { useRecoilValue, useRecoilState } from 'recoil'
import {
    playersState,
    turnState,
    winner,
    leaderboardState,
    hasTie
} from '../../atoms/board';

import { useEffect } from 'react'
import usePrevious  from '../../hooks/usePrevious'
import './Leaderboard.css'

const Player = ({mark}) => {

    const currentPlayer = useRecoilValue(turnState);
    const gameWinner = useRecoilValue(winner);
    const tie = useRecoilValue(hasTie);

    const [leaderboard, setLeaderboard] = useRecoilState(leaderboardState);

    const prevWinner = usePrevious(gameWinner);

    useEffect(()=>{
        if(gameWinner && !prevWinner){
            setLeaderboard(({
                ...leaderboard,
                [gameWinner]: leaderboard[gameWinner] + 1
            }));
        }
    }, [prevWinner, gameWinner]);

    const playerClasses = classNames('player', {
        current: mark === currentPlayer && !gameWinner,
        winner: gameWinner === mark,
        tie: tie
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

