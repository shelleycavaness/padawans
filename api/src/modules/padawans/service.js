import padawanQueries from "./query";
import brcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../config/server";

const PadawanService = {
	register: async body => {
		console.log(body);
		let { firstname, lastname, email, password } = body;

		if (
			typeof firstname !== "string" ||
			typeof lastname !== "string" ||
			typeof email !== "string" ||
			typeof password !== "string"
		) {
			console.log("BOOOM");
			return {
				status: 400,
				payload: {
					success: false,
					message: "All fields are required and must be a string type"
				}
			};
		}

		return brcrypt
			.genSalt()
			.then(salt => brcrypt.hash(password, salt))
			.then(hashedPassword => {
				console.log("mot de passe crypté" + hashedPassword);
				return padawanQueries
					.register({
						firstname,
						lastname,
						email,
						hashedPassword
					})
					.then(padawan => ({
						status: 201,
						payload: {
							success: true,
							message: "User successfully registered"
						}
					}))
					.catch(err => ({
						status: 400,
						payload: {
							success: false,
							message: err
						}
					}));
			});

		// getAll:async()=>{
		//     return userQueries.getAll()
		//     .then(response => ({ status: 200, payload: { success: true, data: response }}))
		//         .catch(err => ({ status: 400, payload: { success: false, message: err } }));

		// }

		// , authenticate: async (body) => {

		//     let { username, password } = body;

		//     if (typeof username !== "string" || typeof password !== "string") {
		//         return { status: 400, payload: { success: false, message: "All fields are required and must be a string type" } }
		//     }

		//     const user = await userQueries.getByUsername(username);

		//     if (!user) {
		//         return { status: 403, payload: { success: false, message: 'Username not found' } }
		//     }

		//     const passwordMatched = await brcrypt.compare(password, user.password);

		//     if (passwordMatched) {
		//         const token = jwt.sign({ id: user.id, role: user.role}, config.secret);

		//         const { password, ...userWithoutPassword } = user;

		//         console.log(" apres userWithoutPassword ")
		//         console.log(token)

		//         return ({ status: 200, payload: { success: true, message: 'User correctly authenticated', data: { 'token': token, user: userWithoutPassword } } })
		//     }

		//     return { status: 403, payload: { success: false, message: 'Username & password missmatch' } }
		//
	}
};
export default PadawanService;
