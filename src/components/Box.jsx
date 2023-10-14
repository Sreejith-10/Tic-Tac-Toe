import React from "react";
import "../styles/Box.css";

const Box = ({value, onClickHandler, idx}) => {
	let style = value === "x" ? "box x" : "box o";
	return (
		<>
			{value ? (
				<div className={style}>
					{value}
				</div>
			) : (
				<div className={style} onClick={() => onClickHandler(idx)}>
					{value}
				</div>
			)}
		</>
	);
};

export default Box;
