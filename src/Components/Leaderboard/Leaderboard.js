import React from 'react';
import classNames from "classnames";
import { useRecoilValue } from 'recoil'
import { players, turnState, winner } from '../../atoms/board';

import './Leaderboard.css'

const Player = ({mark}) => {

    const currentPlayer = useRecoilValue(turnState);
    const gameWinner = useRecoilValue(winner);

    return (
        <div className={classNames('player', {current: mark === currentPlayer, winner: gameWinner === mark })}>
            <span className='name'>
                {mark}
            </span>
        </div>
    )
};

const Leaderboard = () => {
    const gamePlayers = useRecoilValue(players);

    return (
        <div className='leaderboard'>
            {gamePlayers.map(player=>(
                <Player mark={player} />
            ))}
        </div>
    )
};


export default Leaderboard

