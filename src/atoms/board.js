import {atom, selector} from "recoil";
import { getWinningStrike, isBoardFull } from "../gameLogic";

export const boardState = atom({
    key: 'board',
    default: (new Array(3)).fill(null).map(() => (new Array(3)).fill(null))
});

export const playersState = atom({
    key: 'players',
    default: ['X', 'O']
});

const firstPlayer = selector({
    key: 'firstPlayer',
    get: ({get})=>{
        return get(playersState)[0]
    }
});

export const turnState = atom({
    key: 'turn',
    default: firstPlayer
});

export const lastPlayed = atom({
    key: 'lastPLay',
    default: {
        'x': 0,
        'y': 0,
        'marker': null
    }
});

export const winner = selector({
    key: 'winner',
    get: ({get, getCallback})=>{
        const board = get(boardState);
        const play = get(lastPlayed);
        const currWinner = get(winnerState);

        let gameWinner = null;
        if (getWinningStrike(board, play['marker'], play['y'], play['x'])) {
            gameWinner = play['marker'];
        }
        const updateLeaderboard = getCallback(({set})=>{
            if(gameWinner !== null)
                set(leaderboardState, leaderboard=>({
                    ...leaderboard,
                    [gameWinner]: leaderboard[gameWinner] + 1
                }));
        });

        return gameWinner;
    },
    set: ({set, get}, gameWinner)=>{
        const leaderboard = get(leaderboardState);
        set(leaderboardState, {
            ...leaderboard,
            [gameWinner]: leaderboard[gameWinner] + 1
        });
        set(winnerState, gameWinner);
    }
});

export const winnerState = atom({
    key: 'winnerState',
    default: null
});

export const hasTie = selector({
    key: 'hasTie',
    get: ({get}) => {
        const board = get(boardState);
        return isBoardFull(board)
    }
});

const leaderboardValue = selector({
    key: 'leaderboardValue',
    get: ({get})=>{
        const players = get(playersState);
        console.log("players: ", players);

        return players.reduce((result, player) => ({
            ...result,
            [player]: 0
        }), {})
    }
});

export const leaderboardState = atom({
    key: 'leaderboardState',
    default: leaderboardValue
});
