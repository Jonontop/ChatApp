import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/home";
import Login from "./components/Login/login";
import Profile from "./components/Profile/profile";
import Settings from "./components/Settings/settings"
import Settings from "./components/register/register"
import "./App.css";

const App = () => {
	return (
		<Router>
			<div>
				<h1>React Router Example</h1>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/profile">Profile</Link>
					</li>
					<li>
						<Link to="/settings">Settings</Link>
					</li>
					<li>
						<Link to="/register">Settings</Link>
					</li>
				</ul>
				<hr />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="/register" element={<Settings />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
