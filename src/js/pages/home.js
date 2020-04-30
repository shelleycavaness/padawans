import React, { useState } from "react";
import api from "../utils/api";
import Modules from "../components/modules/modules";

const Home = (props) => {
  return (
    <div className="container">
      <h1>Home</h1>
      <Modules />
    </div>
  );
};
export default Home;
