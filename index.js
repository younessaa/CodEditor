import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import tutorRouter from "./routes/tutor.js";
import studentRouter from "./routes/student.js";
import course from "./routes/course.js";
import getRouter from "./routes/router.js";


const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use("/students", studentRouter);
app.use("/tutors", tutorRouter);
app.use("/courses", course);
app.use("/", getRouter);


const PORT = process.env.PORT || 5002;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
