import React from "react";
import "../styles/Winner.css";

const Winner = ({winner, resetGame,gameTie}) => {
	const style = winner === "x" ? "h3 x" : "h3 o";
	return (
		<div className="winner-cont">
			{gameTie ? (
				<h3 className="tie">Game tie</h3>
			) : (
				<h3 className={style}>Winner is {winner}</h3>
			)}
			<h5 className="reset" onClick={resetGame}>
				Reset
			</h5>
		</div>
	);
};

export default Winner;
