// Start server

const StartServer = (server) => {
	console.info("SETUP - Starting server..");

	server.listen(3011, (error) => {
		if (error) {
			console.error("ERROR - Unable to start server.");
		} else {
			console.info(`INFO - Server started on http://localhost:${3011} [DEV]`);
		}
	});
};

export default StartServer;
