// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./App.css";
import DriverSide from "./components/DriverSide.js";
import ParentSide from "./components/ParentSide.js";

function DriversButton() {
	return (
		<Link to="/drivers">
		  <button>Drivers Enter Here</button>
		</Link>
	);
}

function ParentsButton() {
	return (
		<Link to="/parents">
		  <button>Parents Enter Here</button>
		</Link>
	);
}

function App() {
	return (
		<Router>
		  <div id="header-div-keepsafe">
		    <h1>Hello Welcome to KeepSafe!</h1>
		    <Routes>
		      <Route path="/drivers" element={<DriverSide />} />
		      <Route path="/parents" element={<ParentSide />} />
		    </Routes>
		    <br />
		    {window.location.pathname !== '/drivers' && <DriversButton />}
		    <br />
		    <br />
		    {window.location.pathname !== '/parents' && <ParentsButton />}
		    <br />
		  </div>
		</Router>
	);
}


export default App;
