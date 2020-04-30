import React, { useState, useEffect } from "react";
import api from "../utils/api";
import "../../css/style.css";

const Modules = () => {
  const [arrayModules, setArrayModules] = useState([]);

  // useEffect() prepare la data pour ensuite etre affichee
  useEffect(() => {
    api.get("/modules/").then((response) => {
      setArrayModules(response.data.data);
    });
    //   .catch();
  }, []);
  const [modules, setModules] = useState([]);
  const displayModules = arrayModules.map((module, index) => (
    <li key={index}>{module.module_name}</li>
  ));

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Module name</h5>
        </div>
        <div className="card-footer">
          nombre de competence et le bouton pour voir les competence
        </div>
      </div>
      <ul> {displayModules}</ul>
    </div>
  );
};

export default Modules;
