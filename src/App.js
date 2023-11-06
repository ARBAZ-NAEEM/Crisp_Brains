import React from "react";
import Index from "./pages/Home/Index";
import WebsiteCursor from "./components/WebsiteCursor";

function App() {
	return (
		<>
			<WebsiteCursor />
			<div className="back_wall">
				<div className="row">
					<div className="col-3 borderLines"></div>
					<div className="col-3 borderLines"></div>
					<div className="col-3 borderLines"></div>
					<div className="col-3 borderLines"></div>
				</div>
			</div>
			<div className="App"></div>
			<Index />
		</>
	);
}

export default App;
