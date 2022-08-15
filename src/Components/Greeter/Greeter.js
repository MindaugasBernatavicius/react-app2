// Greeter.js
import React, { useState } from "react";
import greeterStyles from "./Greeter.module.css";
// import Button from "./Button/Button";

// Button.js
import "./Button.css";

const Button = ({ text, handleClick }) => {
	return (
		<>
			<button className={greeterStyles.btn} onClick={handleClick}>
				{text}
			</button>
		</>
	);
};

const Greeter = () => {
	const [showGreeting, setShowGreeting] = useState(false);
	const [name, setName] = useState({ value: "", wasCleared: false });

	const handleTextDisplay = () =>
		name.value !== "" && name.wasCleared === false
			? setShowGreeting(!showGreeting)
			: name.value === "" && name.wasCleared === true && showGreeting
			? (setShowGreeting(!showGreeting), (name.wasCleared = false))
			: null;

	return (
		<>
			<div className={greeterStyles.container}>
				<div>
					<div className="box">A</div>
					<input
						// className={greeterStyles.input}
						placeholder="What's your name?"
						onKeyUp={(e) => {
							setName({
								value: e.target.value,
								wasCleared: e.target.value === "" && e.key === "Backspace",
							});
						}}
					/>
					<Button text={showGreeting ? `Hide` : `Show`} handleClick={handleTextDisplay} />
					<label style={{ display: "block", height: "10px", maxWidth: "50px" }}>
						{showGreeting ? `Hi ${name.value}` : ""}
					</label>
				</div>
			</div>
		</>
	);
};
export default Greeter;
