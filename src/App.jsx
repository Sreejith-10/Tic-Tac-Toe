import Board from "./components/Board";
import "./App.css";
import { useState } from "react";

function App() {
	const [game, setGame] = useState(false);
	const [winner, setWinner] = useState();
	return (
			<Board game={game} setGame={setGame} winner={winner} setWinner={setWinner} />
	);
}

export default App;
