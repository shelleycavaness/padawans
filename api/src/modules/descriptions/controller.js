import DescriptionService from "./service";
const DescriptionController = {
  getBySkill: (req, res) => {
    DescriptionService.getBySkill(req.params.id)
      .then(result => res.status(result.status).send(result.payload))
      .catch(error => res.status(500).send(error));
  }
};
export default DescriptionController;
