import "../styles/Board.css";

import React, {useState} from "react";
import Box from "./Box";
import Winner from "./Winner";
import ScoreBoard from "./ScoreBoard";

const Board = () => {
	const [arr, setArr] = useState(Array(9).fill(null)); //board peices
	const [xPlayer, setXPlayer] = useState(true);
	const [game, setGame] = useState(false);
	const [winner, setWinner] = useState();
	const [gameTie, setGameTie] = useState(false);
	const [card, setCard] = useState(false);
	const [gameOver,setGameOver] = useState(false)
	const [scoreCard, setScoreCard] = useState({
		x: 0,
		tie: 0,
		o: 0,
	});
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
		console.log(data);
		//iterating through the winning condition
		for (let i = 0; i < winningCondition.length; i++) {
			const [a, b, c] = winningCondition[i];
			if (data[a] && data[a] === data[b] && data[a] === data[c]) {
				setWinner(data[a]); //player winned
				setGame(true); //set win state to true if anyone wins?
			}
		}
		checkGameTie();
		if (game) {
			setGameOver(true)
			updateScore(winner, gameTie);
		}
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
	const updateScore = (data, gameVal) => {
		if (data === "x") {
			//update x
			setScoreCard({...scoreCard, x: scoreCard.x + 1});
		} else if (data === "o") {
			//update o
			setScoreCard({...scoreCard, o: scoreCard.o + 1});
		} else if (gameVal) {
			//update tie
			setScoreCard({...scoreCard, tie: scoreCard.tie + 1});
		}
	};
	const resetGame = () => {
		setArr(Array(9).fill(null));
		setGame(false);
	};

	const showScore = () => {
		setCard(true);
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
					<Box
						key={idx}
						value={val}
						idx={idx}
					/>
				)}
			</>
		);
	});
	return (
		<div className="container">
			<div className="section">
				<h1>Tic Tac Toe</h1>
				<button className="btn" onClick={showScore}>
					Score
				</button>
			</div>
			<div className="board">{boardPeices}</div>
			{card ? <ScoreBoard setCard={setCard} scoreCard={scoreCard} /> : null}
			{game ? (
				<div className="winner-section">
					<Winner winner={winner} resetGame={resetGame} gameTie={gameTie} />
				</div>
			) : null}
		</div>
	);
};

export default Board;
