import React from "react";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<div className="footer">
			<h3>
				"Seek the help of Allah, Strive and Struggle in the way of Allah
				& Ask an expert what you don't know about"
			</h3>
			<p>Copyright ⓒ Shahriar Ferdous {year}</p>
		</div>
	);
};

export default Footer;
