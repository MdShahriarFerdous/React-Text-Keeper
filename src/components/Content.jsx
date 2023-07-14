import React, { useState } from "react";

const Content = () => {
	const [labelText, setLabelText] = useState("Type Your Text");
	const [defaultColor, setDefaultColor] = useState(true);
	const [text, setText] = useState("");
	const [contentItems, setContentItems] = useState([]);

	const handleClick = () => {
		setLabelText("Text Moved Below");
		// setContentText(text);
		setText("");
		setContentItems((preValue) => {
			return [...preValue, text];
		});
	};

	const handleMouseOver = () => {
		setDefaultColor(false);
	};

	const handleMouseOut = () => {
		setDefaultColor(true);
	};

	const handleChange = (event) => {
		setText(event.target.value);
	};
	return (
		<div>
			<div className="content">
				<h2>{labelText}</h2>
				<textarea
					onChange={handleChange}
					rows="4"
					cols="50"
					value={text}
				>
					{text}
				</textarea>
				<button
					style={{
						backgroundColor: defaultColor ? "#646cff" : "#363dbe",
					}}
					onClick={handleClick}
					onMouseOver={handleMouseOver}
					onMouseOut={handleMouseOut}
				>
					Move Text Below
				</button>
			</div>
			<div className="text-holder">
				{contentItems.map((item) => {
					return <div className="note">{item}</div>;
				})}
			</div>
		</div>
	);
};

export default Content;
