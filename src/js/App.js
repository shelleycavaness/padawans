import React from "react";
import { useDispatch } from "react-redux";

import Home from "./pages/home";

//
const App = () => {
  const dispatch = useDispatch();
  //
  return (
    <div>
      <Home />
    </div>
  );
};
export default App;
