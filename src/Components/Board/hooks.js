import { useSetRecoilState, useRecoilState } from 'recoil'
import { turnState } from "../../atoms/Board"
import { BoardValues } from "../../GameConstants"

const useGetNextTurn = () => {
    const setTurn = useSetRecoilState(turnState);
    const turn = useRecoilState(turnState);

    return ()=>{
        return turn === BoardValues.player1 ? setTurn(BoardValues.player2) : setTurn(BoardValues.player1)
    }

};
