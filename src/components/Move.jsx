import React from "react";
import "../styles/Move.css";

const Move = ({player,xScore,oScore}) => {
	return (
		<div className="move-container">
			{!player ? (
				<div className="move">
					<h1 className="move-x ">X:{xScore}</h1>
				</div>
			) : (
				<div className="move x-css">
					<h1 className="move-x ">X:{xScore}</h1>
				</div>
			)}
			{player ? (
				<div className="move">
					<h1 className="move-o">O:{oScore}</h1>
				</div>
			) : (
				<div className="move  o-css">
					<h1 className="move-o">O:{oScore}</h1>
				</div>
			)}
		</div>
	);
};

export default Move;
