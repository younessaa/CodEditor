import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from 'mongoose';

import UserModal from "../models/student.js";

const secret = 'codeeditor';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret);

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName, sector } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`, sector: `${sector}${studentClass}`});

    const token = jwt.sign( { email: result.email, id: result._id }, secret);

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};

export const createStudent = async (req, res) => {
  const { email, password, firstName, lastName, studentClass, sector } = req.body;

  try {

      const oldUser = await UserModal.findOne({ email });
    
      if (oldUser) return res.status(400).json({ message: "User already exists" });
    
      const hashedPassword = await bcrypt.hash(password, 12);
    
      const newStudent = await UserModal.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`, sector: `${sector}${studentClass}` });
      await newStudent.save();

      res.status(201).json(newStudent );
  } catch (error) {
      res.status(409).json({ message: error.message });
  }
}

export const getStudents = async (req, res) => { 
  try {
      const students = await UserModal.find();
              
      res.status(200).json(students);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
}

export const getStudent = async (req, res) => { 
  const { id } = req.params;

  try {
      const student  = await UserModal.findById(id);
      
      res.status(200).json(student);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
}

export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { email, password, firstName, lastName, studentClass, sector } = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Student with id: ${id}`);
  
  let hashedPassword;
  let updatedStudent;
  
  if(password != null && password != undefined){
    hashedPassword = await bcrypt.hash(password, 12);
    updatedStudent = { email, password: hashedPassword, name: `${firstName} ${lastName}`, sector: `${sector}${studentClass}`, _id: id };
  }
  else{
    updatedStudent = { email, name: `${firstName} ${lastName}`, sector: `${sector}${studentClass}`, _id: id };
  }

  await UserModal.findByIdAndUpdate(id, updatedStudent, { new: true });

  res.json(updatedStudent);
}

export const deleteStudent = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Student with id: ${id}`);

  await UserModal.findByIdAndRemove(id);

  res.json({ message: "Student deleted successfully." });
}



