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
    let modulesWithSkills = await moduleQueries.getSkills();
    let moduleReduce = modulesWithSkills.reduce((tab, element) => {
      tab[element.id_modules] = [...(tab[element.id_modules] || []), element];
      return tab;
    }, {});

    return {
      status: 200,
      payload: { success: true, data: moduleReduce },
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
