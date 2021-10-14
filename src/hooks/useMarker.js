import {useRecoilCallback} from "recoil";
import {setIn} from 'immutable'
import {turnState, players, boardState} from "../atoms/board";


const useMarker = (x, y) => {

    const mark = useRecoilCallback(({set, snapshot})=>()=>{
        const currentPlayer = snapshot.getLoadable(turnState).contents;
        const gamePlayers = snapshot.getLoadable(players).contents;
        const currentPlayerIndex = gamePlayers.findIndex((mark) => mark === currentPlayer);

        set(boardState, (board) => setIn(board, [y, x], currentPlayer));
        set(turnState, () => {
            const nextPlayer = currentPlayerIndex + 1;
            return gamePlayers[nextPlayer < gamePlayers.length ? nextPlayer : 0]
        })

    }, [x, y]);

    return mark;
};


export default useMarker;

