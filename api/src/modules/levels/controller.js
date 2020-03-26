import LevelService from "./service";
const LevelController = {
  getAll: (req, res) => {
    LevelService.getAll()
      .then(result => res.status(result.status).send(result.payload))
      .catch(err => res.status("400").send(err));
  },
  getById: (req, res) => {
    LevelService.getById(req.params.id)
      .then(result => res.status(result.status).send(result.payload))
      .catch(error => res.status(500).send(error));
  }
};
export default LevelController;
