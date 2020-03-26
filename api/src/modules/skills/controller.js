import SkillService from "./service";
const SkillController = {
  getAll: (req, res) => {
    SkillService.getAll()
      .then(result => res.status(result.status).send(result.payload))
      .catch(err => res.status("400").send(err));
  },
  getById: (req, res) => {
    console.log("req.params.id" + req.params.id);
    SkillService.getById(req.params.id)
      .then(result => res.status(result.status).send(result.payload))
      .catch(error => res.status(500).send(error));
  },
  getByModule: (req, res) => {
    console.log("req.params.id" + req.params.id);
    SkillService.getByModule(req.params.id)
      .then(result => res.status(result.status).send(result.payload))
      .catch(error => res.status(500).send(error));
  }
};
export default SkillController;
