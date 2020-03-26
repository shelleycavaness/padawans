import mysql from "mysql2";
import databaseConfig from "../config/database";

const Connection = mysql.createConnection({
<<<<<<< HEAD
  host: databaseConfig.development.host,
  user: databaseConfig.development.username,
  password: databaseConfig.development.password,
  database: databaseConfig.development.database
=======
	host: databaseConfig.development.host,
	port: databaseConfig.development.port,
	user: databaseConfig.development.username,
	password: databaseConfig.development.password,
	database: databaseConfig.development.database,
	port: databaseConfig.development.port
>>>>>>> 882e243ae49d827fb46c254c32277cec2dea9de6
});
//Connecting to database
Connection.connect(err => {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}

	console.log("connected as id " + Connection.threadId);
});
export default Connection;
