import PadawanService from "./service";
const PadawanController = {
  register: (req, res) => {
    PadawanService.register(req.body).then((result) =>
      res.status(result.status).send(result.payload)
    );
  },

  getById: (req, res) => {
    console.log("req.params.id" + req.params.id);
    PadawanService.getById(req.params.id)
      .then((result) => res.status(result.status).send(result.payload))
      .catch((error) => res.status(500).send(error));
  },
  getAll: (req, res) => {
    PadawanService.getAll()
      .then((result) => res.status(result.status).send(result.payload))
      .catch((err) => res.status("400").send(err));
  },
  authenticate: (req, res) => {
    console.log("iciiiii");
    console.log(req.body);
    PadawanService.authenticate(req.body).then((result) =>
      res.status(result.status).send(result.payload)
    );
  },
};
export default PadawanController;
