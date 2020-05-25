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
      //  console.log('-------modules----------', modules)
    //  let myModuleIndex= modules.map(item => console.log('item.id_modules____________', item.id_modules))
    });

    api.get("/modules/skills/all").then((skillsReponse) =>{
      let skillsListData = skillsReponse.data.data;
  
      let resultMaps = skillsListData.map(item => 'name :   '+item.skill_name)
      let skillModule = skillsListData.map( item => item.id_modules)
       console.log('3888888888888888888',skillModule[3])
       if(skillModule[3] == 3 && module.id_modules ==3 ){
         console.log(`MY module number ${skillModule[3]}`)
        } else{
          console.log(modules.id_modules)
        }
      setArraySkills(resultMaps)
     console.log('*******************************8',arrayModules)
    })
  }, []);
  // useEffect(() => {
  //   api.get("/modules/").then((modulesResponse) => {

  //   });
  // });


  // const getSkillsByModules = (idModule) => {
  //   api.get("/skills/module/" + idModule).then((response) => {
  //     setArraySkills(response.data.data);
  
  //   });
  // };

  const [modules, setModules] = useState([]);
  const displayModules = arrayModules.map((module, index) => (
    <div key={index} className="col-md-4  col-sm-12  my-sm-3 ">
      <div className="card ">
        <div className="card-body">
          <h5 className="card-title">{module.module_name}</h5>
          <ul>
            { 
           
             
              }
          </ul>
        </div>
        <div className="card-footer">competences</div>
      </div>
    </div>
  ));

  return <div className="row">{displayModules}</div>;
};

export default Modules;


 /* console.log('my skills data ================', arraySkills) */
 //     console.log("-----------");
  //     console.log(arraySkills);
      // console.log('my skills data ===================', skillsListData)