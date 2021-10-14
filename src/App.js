
import Leaderboard from "./Components/Leaderboard";
import Board from "./Components/Board";

import './App.css';


function App() {

    return (
        <div className="app">
            <div> Tic-Tac-Toe </div>
            <Leaderboard />
            <Board />
        </div>
    );
}

export default App;
