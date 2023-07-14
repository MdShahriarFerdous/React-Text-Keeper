import React from "react";

const Header = (props) => {
	return (
		<div>
			<div className="header">
				<h1>{props.title}</h1>
			</div>
		</div>
	);
};

export default Header;
