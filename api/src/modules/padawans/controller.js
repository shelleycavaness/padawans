import PadawanService from "./service";
const PadawanController = {
  register: (req, res) => {
    PadawanService.register(req.body).then(result =>
      res.status(result.status).send(result.payload)
    );
  }
  // findById: async (req, res) => {
  //   console.log("req.params.id" + req.params.id);
  //   UserService.findById(req.params.id)
  //     .then(result => res.status(result.status).send(result.payload))
  //     .catch(error => res.status(500).send(error));
  // },
  // authenticate: (req, res) => {
  //   console.log("iciiiii")
  //   console.log(req.body);
  //   UserService.authenticate(req.body).then(result =>
  //     res.status(result.status).send(result.payload)
  //   );
  // },
  // getAll: (req, res) => {
  //   UserService.getAll().then(result =>
  //     res.status(result.status).send(result.payload)
  //   ).catch(err => res.status("400").send(err));
  // }
};
export default PadawanController;
