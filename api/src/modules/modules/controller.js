import ModuleService from "./service";

const ModuleController = {
  getAll: (req, res) => {
    ModuleService.getAll()
      .then((result) => res.status(result.status).send(result.payload))
      .catch((err) => res.status("400").send(err));
  },
  getById: (req, res) => {
    ModuleService.getById(req.params.id)
      .then((result) => res.status(result.status).send(result.payload))
      .catch((error) => res.status(500).send(error));
  },
  getSkills: (req, res) => {
    ModuleService.getSkills()
      .then((result) => res.status(result.status).send(result.payload))
      .catch((err) => res.status("400").send(err));
  },
};

export default ModuleController;
