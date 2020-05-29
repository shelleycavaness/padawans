import React from "react";
import { useDispatch } from "react-redux";
import Home from "./pages/home";
import Login from "./pages/login";
import Header from "./components/Header";
import Register from "./pages/register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();

  return (
    <Router>
      <>
        <Header/>
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
        </Switch>
      </>  
    </Router>
  );
};
export default App;
