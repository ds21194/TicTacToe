import {atom, selector, useRecoilState, useSetRecoilState} from "recoil";
import { hasWinner } from "../gameLogic";

export const boardState = atom({
    key: 'board',
    default: (new Array(3)).fill(null).map(() => (new Array(3)).fill(null))
});

export const players = atom({
    key: 'players',
    default: ['X', 'O']
});

const firstPlayer = selector({
    key: 'firstPlayer',
    get: ({get})=>{
        return get(players)[0]
    }
});

export const turnState = atom({
    key: 'turn',
    default: firstPlayer
});


export const winner = selector({
    key: 'winner',
    get: ({get})=>{
        const board = get(boardState);
        const player = get(turnState);

        // return winner
        return hasWinner(board, player);
    }
});

