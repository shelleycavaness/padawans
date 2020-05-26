import moduleQueries from "./query";

const ModuleService = {
  getAll: async () => {
    return moduleQueries
      .getAll()
      .then((response) => ({
        status: 200,
        payload: { success: true, data: response },
      }))
      .catch((err) => ({
        status: 400,
        payload: { success: false, message: err },
      }));
  },
  getSkills: async () => {
    // let modulesWithSkills = await moduleQueries.getSkills();
    // let moduleReduce = modulesWithSkills.reduce((tab, element) => {
    //   tab[element.id_modules] = [...(tab[element.id_modules] || []), element];
    //   return tab;
    // }, {});
    let modules = await moduleQueries.getAll();
    let resultat = [];
    for (let i = 0; i < modules.length; i++) {
      let module = {
        id_modules: modules[i].id_modules,
        module_name: modules[i].module_name,
      };
      let skills = await moduleQueries.getByModule(modules[i].id_modules);
      resultat.push({ ...module, skills });
    }

    return {
      status: 200,
      payload: { success: true, data: resultat },
    };
  },

  getById: async (id) => {
    return moduleQueries
      .getById(id)
      .then((response) => ({
        status: 200,
        payload: { success: true, data: response },
      }))
      .catch((err) => ({
        status: 400,
        payload: { success: false, message: err },
      }));
  },
};

export default ModuleService;
