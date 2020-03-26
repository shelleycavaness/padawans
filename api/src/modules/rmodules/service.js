import moduleQueries from "./query";
import brcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../config/server";

const ModuleService = {
	
	getAll: async () => {
		return moduleQueries
			.getAll()
			.then(response => ({
				status: 200,
				payload: { success: true, data: response }
			}))
			.catch(err => ({
				status: 400,
				payload: { success: false, message: err }
			}));
	},

	getById: async id => {
		return moduleQueries
			.getById(id)
			.then(response => ({
				status: 200,
				payload: { success: true, data: response }
			}))
			.catch(err => ({
				status: 400,
				payload: { success: false, message: err }
			}));
	}
};

export default ModuleService;
