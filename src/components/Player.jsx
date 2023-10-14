import React from "react";
import "../styles/Player.css";

const Player = () => {
	return (
		<div className="player-container">
			<div className="move">
                <h1>X</h1>
            </div>
            <div className="move">
                <h1>O</h1>
            </div>
		</div>
	);
};

export default Player;
