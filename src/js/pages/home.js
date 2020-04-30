import React, { useState } from "react";
import api from "../utils/api";
import Skills from "../components/Skills";

const Home = (props) => {
  return (
    <div>
      <h1>Home</h1>
      <Skills />
    </div>
  );
};
export default Home;
