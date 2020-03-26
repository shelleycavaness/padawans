import express from "express";
import ModuleController from "./controller";

const router = express.Router();

//router.post("/register", ModuleController.register);
router.get("/", ModuleController.getAll);
router.get("/:id", ModuleController.getById);

export default router;
