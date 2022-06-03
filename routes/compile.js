import express from "express";
const router = express.Router();

import { compile } from "../controllers/compile.js";

router.post("/", compile);

export default router;