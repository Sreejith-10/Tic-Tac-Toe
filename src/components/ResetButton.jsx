import React from "react";
import "../styles/ResetButton.css";
import {GrPowerReset} from "react-icons/gr";

const ResetButton = ({resetBoard}) => {
	return (
		<div className="button-container" onClick={resetBoard}>
			<GrPowerReset className="btn-reset" />
		</div>
	);
};

export default ResetButton;
