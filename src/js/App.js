import React from "react";
import Home from "./pages/home";
import Login from "./pages/login";
import Header from "./components/Header";
import Register from "./pages/register";
import Exercices from "./pages/exercices";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <div>
        <Header />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/exercices">
            <Exercices />
          </Route>
          <Route path="/register">
            <Register />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
