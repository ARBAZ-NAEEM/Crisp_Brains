import React, { useState, createContext, useEffect } from 'react';
import './App.css';
import 'animate.css';

import { Routes, Route } from "react-router-dom"

import Homepage from './pages/Homepage';
import EarlyAccessForm from './pages/Homepage/forms/EarlyAccess';
import PartnerForm from './pages/Homepage/forms/Partner';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
			</Routes>
		</div>
	);
}

export default App;