import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<div className="container">
				<Header title="Text-Mover" />
				<Content />
				<Footer />
			</div>
		</>
	);
}

export default App;
