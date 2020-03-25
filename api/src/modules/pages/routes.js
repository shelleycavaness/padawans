import express from "express";
import PageController from "./controller";
const router = express.Router();

router.get("/", PageController.allPages);
router.get("/:id", PageController.getById);

export default router;
