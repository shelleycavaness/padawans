import express from "express";
import SkillController from "./controller";
// import authorize from "../../helpers/authorize"
const router = express.Router();

router.get("/", SkillController.getAll);
router.get("/:id", SkillController.getById);
router.get("/module/:id", SkillController.getByModule);

export default router;
