import express from "express";
const router = express.Router();

import { signin, signup, createStudent, getStudents, getStudent, updateStudent, deleteStudent } from "../controllers/student.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/", createStudent);
router.get("/", getStudents);
router.get("/:id", getStudent);
router.patch("/:id", updateStudent);
router.delete("/:id", deleteStudent);


export default router;