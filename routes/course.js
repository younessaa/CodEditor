import express from "express";
const router = express.Router();

import auth from "../middlewares/auth.js";

import { getCourses, getCourse, createCourse, updateCourse, deleteCourse } from "../controllers/course.js";

router.post("/", createCourse);
router.get("/", getCourses);
router.get("/:id", getCourse);
router.patch("/:id", updateCourse);
router.delete("/:id", deleteCourse);


export default router;