import React, { useState, useEffect } from "react";
import api from "../utils/api";

const Skills = () => {
  const [arraySkills, setArraySkills] = useState([]);

  // useEffect() prepare la data pour ensuite etre affichee
  useEffect(() => {
    api.get("/skills/").then((response) => {
      console.log("+++++++Array skills+++++");
      let skills = [];
      response.data.data.forEach((element) => {
        skills.push(element);
      });
      setArraySkills(skills);
    });
    //   .catch();
  }, []);

  //   const displaySkills = () => {
  //     arraySkills.map((skill, index) => <li key={index}>{skill}</li>);
  //   };

  return (
    <div>
      <h1>Les Skills </h1>
      <p>ici skills: {arraySkills.length}</p>
    </div>
  );
};

export default Skills;
