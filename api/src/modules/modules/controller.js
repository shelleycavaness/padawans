import ModuleService from "./service";

const ModuleController = {
  getAll: (req, res) => {
    console.log("all");
    ModuleService.getAll()
      .then((result) => res.status(result.status).send(result.payload))
      .catch((err) => res.status("400").send(err));
  },
  getById: (req, res) => {
    ModuleService.getById(req.params.id)
      .then((result) => res.status(result.status).send(result.payload))
      .catch((error) => res.status(500).send(error));
  },
  getAllSkills: (req, res) => {
    console.log("icbbbbbbbi");
    ModuleService.getSkills()
      .then((result) => res.status(result.status).send(result.payload))
      .catch((err) => res.status("400").send(err));
  },
};

export default ModuleController;
