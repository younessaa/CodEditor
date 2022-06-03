import express from "express";
const router = express.Router();

import { signin, signup, createTutor, getTutors, getTutor, updateTutor, deleteTutor } from "../controllers/tutor.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/", createTutor);
router.get("/", getTutors);
router.get("/:id", getTutor);
router.patch("/:id", updateTutor);
router.delete("/:id", deleteTutor);


export default router;