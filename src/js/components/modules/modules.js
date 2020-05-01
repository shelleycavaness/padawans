import React, { useState, useEffect } from "react";
import api from "../../utils/api";
import "./modules.css";

const Modules = () => {
  const [arrayModules, setArrayModules] = useState([]);
  const [arraySkills, setArraySkills] = useState([]);

  //useEffect() prepare la data pour ensuite etre affichee
  useEffect(() => {
    api.get("/modules/").then((modulesResponse) => {
      // setArrayModules(moduleResponse.data.data);
      let modules = modulesResponse.data.data;
      let modulesWithSkills = [];
      let x = 0;

      modules.forEach((module) => {
        api.get("/skills/module/" + module.id).then((skillsResponse) => {
          let skills = skillsResponse.data.data;
          let moduleWithSkills = { ...module, skills: skills };

          modulesWithSkills.push(moduleWithSkills);
          x++;

          if (x === modules.length) {
            setArrayModules(modulesWithSkills);
          }
        });
      });
    });
  }, []);
  // useEffect(() => {
  //   api.get("/modules/").then((modulesResponse) => {

  //   });
  // });

  console.log(arrayModules);

  // const getSkillsByModules = (idModule) => {
  //   api.get("/skills/module/" + idModule).then((response) => {
  //     setArraySkills(response.data.data);
  //     console.log("-----------");
  //     console.log(arraySkills);
  //   });
  // };

  const [modules, setModules] = useState([]);
  const displayModules = arrayModules.map((module, index) => (
    <div key={index} className="col-md-4  col-sm-12  my-sm-3 ">
      <div className="card ">
        <div className="card-body">
          <h5 className="card-title">{module.module_name}</h5>
        </div>
        <div className="card-footer">competences</div>
      </div>
    </div>
  ));

  return <div className="row">{displayModules}</div>;
};

export default Modules;
