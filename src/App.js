
import Leaderboard from "./components/Leaderboard";
import Board from "./components/Board";

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
