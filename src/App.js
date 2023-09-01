import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Form from "./components/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	const [nav, setNav] = useState({
		title: "Text Utilities",
		home: "home",
		about: "about",
	});
	const [about, setAbout] = useState({
		abouttitle1: "1. Format with Ease",
		about1:"Effortlessly adjust your text's appearance using our Text Utilities tool. Whether you want to change font styles, adjust spacing, or add emphasis, our tool provides a simple interface to make your text look exactly the way you want it to. Say goodbye to manually tweaking formatting – let Text Utilities do the work for you!",
		abouttitle2: "2. Analyze and Modify",
		about2:"Enhance your text manipulation capabilities with Text Utilities. Our tool empowers you to analyze your text, count words and characters, and even perform advanced modifications like changing cases or finding and replacing specific words or phrases. Save time and effort by letting Text Utilities handle these tasks for you.",
		abouttitle3: "3. Save Time, Get Results",
		about3: "Simplify your text-related tasks with Text Utilities. Instead of spending valuable time on repetitive actions, use our tool to automate and streamline your processes. From generating lorem ipsum text to formatting dates and numbers, Text Utilities is designed to help you achieve quick and accurate results, allowing you to focus on what truly matters.",
	});

	const [dstyles, setDStyles] = useState({
		color: "#FFFFFF",
		backgroundColor: "#1E1F38",
		height: "100vh",
	});
	const [wstyles, setWStyles] = useState({
		color: "#000000",
		backgroundColor: "#FFFFFF",
		height: "100vh",
	});

	const [texttitle, settexttitle] = useState("Enter your text");

	const [mode, setDarkMode] = useState(true);

	function h() {
		if (mode == true) {
			setDarkMode(false);
			setNodeMode("dark");
		} else {
			setDarkMode(true);
			setNodeMode("light");
		}
	}
	const [node, setNodeMode] = useState("dark");

	return (
		<div style={mode ? wstyles : dstyles}>
			<BrowserRouter>
				<Navbar
					title={nav.title}
					about={nav.about}
					home={nav.home}
					mode={mode}
					
					
				/>
				<div class="my-2  position-absolute end-0 top-0 my-3 sw" >
					<div class="form-check form-switch">
						<input
							class="form-check-input"
							type="checkbox"
							role="switch"
							id="flexSwitchCheckDefault"
							onChange={h}
						/>
						<label
							class="form-check-label"
							for="flexSwitchCheckDefault"
						>
							{node} mode
						</label>
					</div>
				</div>
				
				<Routes>
					<Route
						path="/about"
						element={
							<About
								mode={mode}
								about1={about.about1}
								about2={about.about2}
								about3={about.about3}
								abouttitle1={about.abouttitle1}
								abouttitle2={about.abouttitle2}
								abouttitle3={about.abouttitle3}
							/>
						}
					/>
					<Route
						path="/"
						element={
							<div mode={mode} className="container col-12 my-5 c">
								<Form texttitle={texttitle} mode={mode} />
							</div>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
