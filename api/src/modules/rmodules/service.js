import moduleQueries from "./query";
import brcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../config/server";

const ModuleService = {
	// register: async body => {
	// 	console.log(body);
	// 	let { name } = body;
	// 	if (typeof name !== "string") {
	// 		console.log("Test name of module");
	// 		return {
	// 			status: 400,
	// 			payload: {
	// 				success: false,
	// 				message: "All fields are required and must be a string type"
	// 			}
	// 		}.then(module => ({
	// 			status: 201,
	// 			payload: {
	// 				success: true,
	// 				message: "Module successfully registered"
	// 			}
	// 		}));
	// 	}
	// },

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
