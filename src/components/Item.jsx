import React from "react";

const Item = ({ text, id, deleteText }) => {
	return (
		<div className="note">
			<p>{text}</p>
			<button
				onClick={() => {
					deleteText(id);
				}}
			>
				Remove
			</button>
		</div>
	);
};

export default Item;
