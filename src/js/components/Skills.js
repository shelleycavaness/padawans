import React, { useState, useEffect } from "react";
import api from "../utils/api";

const Skills = () => {
  const [arraySkills, setArraySkills] = useState([]);

  // useEffect() prepare la data pour ensuite etre affichee
  useEffect(() => {
    api.get("/skills/").then((response) => {
      setArraySkills(response.data.data);
    });
    //   .catch();
  }, []);
  const [skills, setSkills] = useState([]);
  const displaySkills = arraySkills.map((skill, index) => (
    <li key={index}>{skill.id}</li>
  ));

  return (
    <div>
      <h1>Les Skills </h1>
      <ul> {displaySkills}</ul>
    </div>
  );
};

export default Skills;
