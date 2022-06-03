import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from 'mongoose';

import UserModal from "../models/tutor.js";

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
  const { email, password, firstName, lastName} = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`});

    const token = jwt.sign( { email: result.email, id: result._id }, secret);

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};

export const createTutor = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {

      const oldUser = await UserModal.findOne({ email });
    
      if (oldUser) return res.status(400).json({ message: "User already exists" });
    
      const hashedPassword = await bcrypt.hash(password, 12);
    
      const newTutor = await UserModal.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });
      await newTutor.save();

      res.status(201).json(newTutor );
  } catch (error) {
      res.status(409).json({ message: error.message });
  }
}

export const getTutors = async (req, res) => { 
  try {
      const tutors = await UserModal.find();
              
      res.status(200).json(tutors);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
}

export const getTutor = async (req, res) => { 
  const { id } = req.params;

  try {
      const tutor  = await UserModal.findById(id);
      
      res.status(200).json(tutor);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
}

export const updateTutor = async (req, res) => {
  const { id } = req.params;
  const { email, password, firstName, lastName } = req.body;
  
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Tutor with id: ${id}`);

  let hashedPassword;
  let updatedTutor;
  
  if(password != null && password != undefined){
    hashedPassword = await bcrypt.hash(password, 12);
    updatedTutor = { email, password: hashedPassword, name: `${firstName} ${lastName}`, _id: id };
  }
  else{
    updatedTutor = { email, name: `${firstName} ${lastName}`, _id: id };
  }

  

  await UserModal.findByIdAndUpdate(id, updatedTutor, { new: true });

  res.json(updatedTutor);
}

export const deleteTutor = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`NoTutor with id: ${id}`);

  await UserModal.findByIdAndRemove(id);

  res.json({ message: "Tutor deleted successfully." });
}
