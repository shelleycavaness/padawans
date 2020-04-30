import React, { useState, useEffect } from "react";
import api from "../../utils/api";
// import "./skills.css";

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
    <li key={index}>
      {skill.id} {skill.skill_name}
    </li>
  ));

  return (
    <div>
      <h1>Les Skills </h1>

      <div key={index} className="col-md-4  col-sm-12  my-sm-3 ">
        <div className="card ">
          <div className="card-body">
            <h5 className="card-title">{skill.skill_name}</h5>
          </div>
          <div className="card-footer">{displaySkills.length} competences</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
