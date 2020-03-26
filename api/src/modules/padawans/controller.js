import PadawanService from "./service";
const PadawanController = {
  register: (req, res) => {
    PadawanService.register(req.body).then(result =>
      res.status(result.status).send(result.payload)
    );
  },
  findById: (req, res) => {
    console.log("+++++++++++++++req.params.id" + req.params.id);
    PadawanService.findById(req.params.id, results => {
      results.success ? res.status(200).send(results) : res.status(404).send(results)  
      // .then(results => res.status(results.status).send(results))
      // .catch(error => res.status(500).send(error));
    }) 
     
  },
  // authenticate: (req, res) => {
  //   console.log("iciiiii")
  //   console.log(req.body);
  //   UserService.authenticate(req.body).then(result =>
  //     res.status(result.status).send(result.payload)
  //   );
  // },
  getAll: (req, res) => {
    PadawanService.getAll().then(result =>
      res.status(result.status).send(result.payload)
    ).catch(err => res.status("400").send(err));
  }
};
export default PadawanController;
