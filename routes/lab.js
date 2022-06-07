import express from "express";
const router = express.Router();

import auth from "../middlewares/auth.js";

import { getLabs, getLab, createLab, updateLab, deleteLab } from "../controllers/lab.js";

router.post("/", createLab);
router.get("/", getLabs);
router.get("/:id", getLab);
router.patch("/:id", updateLab);
router.delete("/:id", deleteLab);


export default router;