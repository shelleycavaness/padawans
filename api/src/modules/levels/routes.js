import express from "express";
import LevelController from "./controller";
// import authorize from "../../helpers/authorize"
const router = express.Router();

router.get("/", LevelController.getAll);
router.get("/:id", LevelController.getById);

export default router;
