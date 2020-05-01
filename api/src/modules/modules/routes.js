import express from "express";
import ModuleController from "./controller";

const router = express.Router();

router.get("/", ModuleController.getAll);
router.get("/:id", ModuleController.getById);
router.get("/skills/all", ModuleController.getSkills);

export default router;
