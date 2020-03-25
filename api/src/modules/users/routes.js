import express from "express";
import UserController from "./controller"
import authorize from "../../helpers/authorize"
const router = express.Router();

router.post("/register", UserController.register);
router.post("/authenticate", UserController.authenticate);
router.get("/:id", UserController.findById);
router.get("/",authorize("admin"), UserController.getAll);





export default router