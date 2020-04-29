import React, { useState, useEffect } from "react";
import api from "../utils/api";

const Home = (props) => {
  const [padawans, setPadawans] = useState([
    "Alex",
    "thibault",
    "clem",
    "elena",
    "jega",
    "julien",
    "lilan",
    "shelley",
    "rim",
  ]);
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    api.get("/skills/").then((response) => {
      setSkills(response.data.data);
    });
  }, []);

  const listSkills = skills.map((skill, index) => (
    <li key={index}>{skill.id}</li>
  ));

  const getRandomArbitrary = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const randomList = () => {
    let arrayPadawans = padawans;
    let result = [];
    while (arrayPadawans.length > 0) {
      let numberRand = getRandomArbitrary(1, arrayPadawans.length);
      result.push(arrayPadawans[numberRand - 1]);
      arrayPadawans.splice(numberRand - 1, 1);
    }
    setPadawans(result);
  };
  const listPadawans = padawans.map((padawan, index) => (
    <li key={index}>{padawan}</li>
  ));
  return (
    <div>
      <h1>Home</h1>
      <ul>{listPadawans}</ul>
      <ul>{listSkills}</ul>

      <button onClick={randomList}> randam</button>
    </div>
  );
};
export default Home;
