import {winner} from "../atoms/board";


const useTicTacToe = () => {
    const gameWinner = useRecoilValue(winner);

    // new game
    const newGame = useRecoilCallback(...)

    // new game + set winner
    const forfeit = useCallback(() => {
        newGame()
        // add +1 to winner
    }, [newGame]);

    return [newGame, forfeit]
};



