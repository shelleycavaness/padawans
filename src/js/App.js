import React, { useState, useEffect } from "react";
import Home from "./pages/home";
import Login from "./pages/login";
import Header from "./components/Header";
import Register from "./pages/register";
import Test from "./pages/test";
import { getPadawanLocalStorage } from "./utils/local-storage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const App = () => {
  const [padawan, setPadawan] = useState(null);

  const [appName, setAppName] = useState("Default app name");

  const handleChangeHeaderTitle = (title) => {
    setAppName(title);
  };
  useEffect(() => {
    let storagePadawan = getPadawanLocalStorage();
    if (storagePadawan) setPadawan(storagePadawan);
  }, []);
  return (
    <Router>
      <div>
        <Header
          title={appName}
          onChangeHeaderTitle={handleChangeHeaderTitle}
          padawan={padawan}
        />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login setPadawan={setPadawan} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
