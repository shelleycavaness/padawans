import express from "express";
import DescriptionController from "./controller";
// import authorize from "../../helpers/authorize"

const router = express.Router();
router.get("/skill/:id", DescriptionController.getBySkill);

export default router;
