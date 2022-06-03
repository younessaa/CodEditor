import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer } from "http";
import { Server } from "socket.io";

import { addUser, getUsersInRoom, removeUser, getUsers } from "./users.js";

import getRouter from "./routes/router.js";


const app = express();
dotenv.config();

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000"
  }
});

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());



io.on('connection', (socket) => {
  socket.on('join', ({ _id, name, userCode, userInput, userLang, courseID }, callback) => {
    const { error, user } = addUser({ id: socket.id, _id, name, userCode, userInput, userLang, courseID });
    //console.log(getUsersInRoom(courseID));

    // if(error) {
    //   console.log("error");
    //   return callback(error)
    // };

    // socket.join(user.courseID);
  
    io.emit('roomDataByCourseID', { courseID: courseID, users: getUsersInRoom(courseID) });
    io.emit('roomData', { courseID: courseID, users: getUsers() });

    callback();
  });


  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.emit('roomData', { courseID: user.courseID, users: getUsers() });
      io.emit('roomDataByCourseID', { courseID: user.courseID, users: getUsersInRoom(user.courseID) });
    }
  })
});

app.use("/", getRouter);


const PORT = process.env.PORT || 5003;

server.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
