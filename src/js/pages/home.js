import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchModules } from "../store/modulestore";
import {fetchSkills} from "../store/skillStore";

const Home = () => {
  const dispatch = useDispatch();
  const moduleIsLoading = useSelector((state) => state.modulestore.modules.isLoading);
  const modulesCollection = useSelector(
    (state) => state.modulestore.modules.collection
  );
  const skillsIsLoading = useSelector((state) => state.skillStore.skills.isLoading);
  const skillsCollection = useSelector((state) => state.skillStore.skills.collection);

  useEffect(() => {
    dispatch(fetchModules());
    dispatch(fetchSkills());
  }, []);

  if (moduleIsLoading) return <span>Modules are loading</span>;
  if(skillsIsLoading) return <span>skills are loading</span>

  return (
    <section>
      <h1>Home</h1>
      {modulesCollection &&
        modulesCollection.map((item) => (
          <span key={item.id_modules}>{item.module_name}</span>
        ))}
      <button onClick={() => dispatch({ type: "CLEAR_MODULES" })}>
        {" "}
        Clear modules{" "}
      </button>
      <ul>
      {
          skillsCollection && 
          skillsCollection.map((item)=> (<li key={item.id_skills}> {item.skill_name}</li> ))
        }
      </ul>
       
      

    </section>
  );
};

export default Home;
