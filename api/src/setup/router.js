import express from "express";
import padawanRoutes from "../modules/padawans/routes";
import moduleRoutes from "../modules/modules/routes";
import skillRoutes from "../modules/skills/routes";
import levelRoutes from "../modules/levels/routes";
import descriptionRoutes from "../modules/descriptions/routes";

const Router = app => {
	let apiRoutes = express.Router();

	// Home route. We'll end up changing this to our main front end index later.
	app.get("/", function(req, res) {
		res.send("This Route is not yet defined.");
	});
	//Project router
	app.use("/api/", apiRoutes);
	app.use("/api/padawans", padawanRoutes);
	app.use("/api/skills", skillRoutes);
	app.use("/api/levels", levelRoutes);
	app.use("/api/descriptions", descriptionRoutes);
	app.use("/api/modules", moduleRoutes);
};
export default Router;
