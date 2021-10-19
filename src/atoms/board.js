import {atom, selector, useRecoilState, useSetRecoilState} from "recoil";
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
    get: ({get})=>{
        const board = get(boardState);
        const play = get(lastPlayed);

        // return winner
        if (getWinningStrike(board, play['marker'], play['y'], play['x'])) {
            return play['marker'];
        }

        return null;
    }
});

export const hasTie = selector({
    key: 'hasTie',
    get: ({get}) => {
        const board = get(boardState);
        return isBoardFull(board)
    }
});

export const leaderboard = selector({
    key: 'leaderboard',
    get: ({get})=>{
        const players = get(playersState);
        return players.reduce((score, player)=> score[player]=0, {})
    }
});
