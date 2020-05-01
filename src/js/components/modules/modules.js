import React, { useState, useEffect } from "react";
import api from "../../utils/api";

import "./modules.css";

const Modules = () => {
  const [arrayModules, setArrayModules] = useState([]);
  const [arraySkills, setArraySkills] = useState([]);

  //useEffect() prepare la data pour ensuite etre affichee
  // useEffect(() => {
  //   api.get("/modules/").then((modulesResponse) => {
  //     // setArrayModules(moduleResponse.data.data);
  //     let modules = modulesResponse.data.data;
  //     let modulesWithSkills = [];
  //     let x = 0;

  //     modules.forEach((module) => {
  //       api.get("/skills/module/" + module.id).then((skillsResponse) => {
  //         let skills = skillsResponse.data.data;
  //         let moduleWithSkills = { ...module, skills: skills };

  //         modulesWithSkills.push(moduleWithSkills);
  //         x++;

  //         if (x === modules.length) {
  //           setArrayModules(modulesWithSkills);
  //         }
  //       });
  //     });
  //   });
  // }, []);
  // useEffect(() => {
  //   api.get("/modules/").then((modulesResponse) => {

  //   });}
  //  api.get("localhost:3010/api/modules/skills/all")=>{}
  // });

  // const getSkillsByModules = (idModule) => {
  //   api.get("/skills/module/" + idModule).then((response) => {
  //     setArraySkills(response.data.data);
  //     console.log("-----------");
  //     console.log(arraySkills);
  //   }); if (id_modulues: 1 == index +
  // };

  /* recuperer les data dans moduleSkillsAll=response.data.data
     moduleSkillsAll.map((element, index=id_module)=>{
    index= id_modules
    if (element.id_modules=== index+1) { console.log(element.skill_name) }
  })
  
  */
  useEffect(() => {
    api.get("/modules/skills/all").then((response) => {
      let result = [];
      setArrayModules(Object.values(response.data.data));
    });
  }, []);

  const [modules, setModules] = useState([]);
  const displayModules = arrayModules.map((module, index) => (
    <div key={index} className="col-md-4  col-sm-12  my-sm-3 ">
      <div className="card ">
        <div className="card-body">
          <h5 className="card-title">{module[0].module_name}</h5>
        </div>
        <div className="card-footer">{module.length}competences</div>
        <div>
          {module.map((skill, index) => (
            <div key={index}>{skill.skill_name}</div>
          ))}
        </div>
      </div>
    </div>
  ));

  return <div className="row">{displayModules}</div>;
};

export default Modules;
