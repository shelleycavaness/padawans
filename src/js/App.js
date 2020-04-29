import React, { useState } from "react";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Header from "./componants/header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<Header />
			<div>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};
export default App;
