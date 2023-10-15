import "../styles/Board.css";

import React, {useState} from "react";
import Box from "./Box";
import Winner from "./Winner";
import Move from "./Move";
import ResetButton from "./ResetButton";

const Board = () => {
	const [arr, setArr] = useState(Array(9).fill(null)); //board peices
	const [xPlayer, setXPlayer] = useState(true);
	const [game, setGame] = useState(false);
	const [winner, setWinner] = useState();
	const [gameTie, setGameTie] = useState(false);
	const [gameOver, setGameOver] = useState(false);
	const [xScore, setXscore] = useState(0);
	const [oScore, setOscore] = useState(0);

	const winningCondition = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	const onClickHandler = (id) => {
		let updatedArr = arr.map((val, idx) => {
			if (id === idx) {
				//matching array index with board peice index
				if (val === null) {
					//checking if xplayer is playing
					if (xPlayer) return "x";
					return "o";
				} else {
					return val;
				}
			} else {
				return val;
			}
		});
		//checking for winner
		checkWinner(updatedArr);
		setArr(updatedArr);
		setXPlayer(!xPlayer);
	};

	const checkWinner = (data) => {
		//iterating through the winning condition
		for (let i = 0; i < winningCondition.length; i++) {
			const [a, b, c] = winningCondition[i];
			if (data[a] && data[a] === data[b] && data[a] === data[c]) {
				setWinner(data[a]); //player winned
				setGame(true); //set win state to true if anyone wins?
				trialFunction(data[a]);
			}
		}
		checkGameTie();
	};

	const checkGameTie = () => {
		//check all fields are filled
		let count = 1;
		arr.filter((val) => {
			if (val != null) {
				count = count + 1;
			}
		});
		//check if no winner
		if (count === 9 && !game) {
			setGameTie(true);
			setGame(true);
		} else {
			setGameTie(false);
		}
	};
	const resetGame = () => {
		setArr(Array(9).fill(null));
		setGame(false);
		setGameOver(false);
	};
	const resetBoard = () => {
		setArr(Array(9).fill(null));
	};
	const trialFunction = (val) => {
		val === "x" ? setXscore(xScore + 1) : setOscore(oScore + 1);
		setGameOver(true);
	};

	const boardPeices = arr.map((val, idx) => {
		return (
			<>
				{!gameOver ? (
					<Box
						key={idx}
						value={val}
						idx={idx}
						onClickHandler={onClickHandler}
					/>
				) : (
					<Box key={idx} value={val} idx={idx} />
				)}
			</>
		);
	});
	return (
		<div className="container">
			<div className="section">
				<h1>Tic Tac Toe</h1>
				<div>
					<ResetButton resetBoard={resetBoard} />
				</div>
			</div>
			<div className="board">{boardPeices}</div>
			{game ? (
				<div className="winner-section">
					<Winner winner={winner} resetGame={resetGame} gameTie={gameTie} />
				</div>
			) : (
				<div className="bottom">
					<Move player={xPlayer} xScore={xScore} oScore={oScore} />
				</div>
			)}
		</div>
	);
};

export default Board;
