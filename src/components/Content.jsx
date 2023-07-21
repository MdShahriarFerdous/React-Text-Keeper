import React, { useState } from "react";
import Item from "./Item";
import { v4 as uuidv4 } from "uuid";

const Content = () => {
	const [labelText, setLabelText] = useState("Write Your Text");
	const [defaultColor, setDefaultColor] = useState(true);
	const [text, setText] = useState("");
	const [contentItems, setContentItems] = useState([]);

	const handleClick = () => {
		setText("");
		if (text.trim() !== "") {
			setContentItems((preValue) => {
				return [...preValue, text];
			});
			setLabelText("Text Moved Below");
		}
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

	const handleDelete = (id) => {
		setContentItems((prevValue) => {
			return prevValue.filter((item, index) => {
				return index !== id;
			});
		});
	};
	return (
		<div className="content-container">
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
				{contentItems.map((item, index) => {
					return (
						<Item
							key={uuidv4()}
							id={index}
							text={item}
							deleteText={handleDelete}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Content;
