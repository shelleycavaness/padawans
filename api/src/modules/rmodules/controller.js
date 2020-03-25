import ModuleService from "./service";

const ModuleController = {
	register: (req, res) => {
		ModuleService.register(req.body)
			.then(result => res.status(result.status).send(result.payload))
			.catch(err => res.status("400").send(err));
	},
	getAll: (req, res) => {
		ModuleService.getAll()
			.then(result => res.status(result.status).send(result.payload))
			.catch(err => res.status("400").send(err));
	},
	getById: (req, res) => {
		console.log("req.params.id" + req.params.id);
		ModuleService.getById(req.params.id)
			.then(result => res.status(result.status).send(result.payload))
			.catch(error => res.status(500).send(error));
	}
};

export default ModuleController;
