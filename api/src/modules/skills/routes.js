import express from "express";
import SkillController from "./controller";
// import authorize from "../../helpers/authorize"
const router = express.Router();

router.get("/", SkillController.getAll);
router.get("/:id", SkillController.getById);
router.get("/module/:id", SkillController.getByModule);
//j'ai besoin quand je passe le id de skill j'ai la liste de padawans ainsi que leur niveau
router.get("/:id/padawans", SkillController.getPadawans);

export default router;
