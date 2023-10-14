import "../styles/ScoreBoard.css";
const ScoreBoard = ({setCard,scoreCard}) => {
	console.log("Hello",scoreCard);
	const closeScore = () => {
		setCard(false);
	};
	return (
		<div className="score-container">
			<button className="close-btn" onClick={closeScore}>
				close
			</button>
			<div className="score-board">
				<div className="number">
					<div className="xl">X</div>
					<div className="score xl-clr">{scoreCard.x}</div>
				</div>
				<div className="number">
					<div className="tiel">Tie</div>
					<div className="score">{scoreCard.tie}</div>
				</div>
				<div className="number">
					<div className="ol">O</div>
					<div className="score ol-clr">{scoreCard.o}</div>
				</div>
			</div>
		</div>
	);
};

export default ScoreBoard;
