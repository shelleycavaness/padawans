import express from "express";
import ModuleController from "./controller";

const router = express.Router();

router.get("/", ModuleController.getAll);
router.get("/:id", ModuleController.getById);
router.get("/test", ModuleController.getAllSkills);

export default router;
// http://localhost:3010/api/modules/
