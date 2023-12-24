// src/App.js

import "./App.css";
import DriverSide from "./components/DriverSide.js";
import ParentSide from "./components/ParentSide.js";



function App() {
	return (
		<div id="header-div-keepsafe">
		  <h1>Hello Welcome to KeepSafe!
		  </h1>
		  <DriverSide />
		    <br />
		  <ParentSide />
		</div>
	);
}


export default App;
