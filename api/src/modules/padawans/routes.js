import express from "express";
import PadawansController from "./controller";
import authorize from "../../helpers/authorize";
const router = express.Router();

router.post("/register", PadawansController.register);
router.get("/", PadawansController.getAll);
router.get("/:id", PadawansController.getById);
router.post("/authenticate", PadawansController.authenticate);

export default router;
