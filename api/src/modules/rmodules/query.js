import db from "../../setup/database";

// Notre query s'occupe d'effectuer la requête sur la base de donneés et de renvoyer au service les datas
const Query = {
	register: module => {
		console.log("****Query***");
		console.log(module);
		console.log("*******");
		return new Promise((resolve, reject) => {
			let sqlQuery = "INSERT INTO modules(name) values(?)";
			db.query(sqlQuery, [module.name], (err, res) => {
				if (err) reject(err);
				resolve(res);
			});
		});
	},

	getAll: () => {
		let sqlQuery = "SELECT * FROM modules";
		return new Promise((resolve, reject) => {
			db.query(sqlQuery, (err, rows) => {
				if (err) reject(err);
				resolve(rows);
			});
		});
	},

	getById: id => {
		let sqlQuery = `SELECT * FROM modules WHERE id= ${id}`;
		return new Promise((resolve, reject) => {
			db.query(sqlQuery, (err, rows) => {
				if (err) reject(err);
				resolve(rows);
			});
		});
	}
};

export default Query;
