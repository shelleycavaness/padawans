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
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div>
      <ul> {displayModules}</ul>
    </div>
  );
};

export default Modules;
