import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import compile from "./routes/compile.js";
import getRouter from "./routes/router.js";


const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use("/compile", compile);
app.use("/", getRouter);


const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
