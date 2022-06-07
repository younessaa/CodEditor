import express from 'express';
import mongoose from 'mongoose';

import Lab from '../models/lab.js';

const router = express.Router();

export const getLabs = async (req, res) => { 
    try {
        const labs = await Lab.find();
                
        res.status(200).json(labs);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getLab = async (req, res) => { 
    const { id } = req.params;

    try {
        const lab = await Lab.findById(id);
        
        res.status(200).json(lab);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createLab = async (req, res) => {
    const { idCourse, idStudent, studentName, idTutor, idLab, name, code, lang} = req.body;

    const newLab = new Lab({ idCourse, idStudent, studentName, idTutor, idLab, name, code, lang, date: new Date() })

    try {
        await newLab.save();

        res.status(201).json(newLab );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateLab = async (req, res) => {
    const { id } = req.params;
    const { idCourse, idStudent, studentName, idTutor, idLab, name, code, lang} = req.body;
    
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Course with id: ${id}`);

    const updatedLab = { idCourse, idStudent, studentName, idTutor, idLab, name, code, lang, date: new Date(), _id: id };

    await Lab.findByIdAndUpdate(id, updatedLab, { new: true });

    res.json(updatedLab);
}

export const deleteLab = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Course with id: ${id}`);

    await Lab.findByIdAndRemove(id);

    res.json({ message: "Course deleted successfully." });
}


export default router;