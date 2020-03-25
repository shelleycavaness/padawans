import express from "express";
import ProjectController from "./controller"
const router = express.Router();


router.get("/", ProjectController.allProjects)

export default router