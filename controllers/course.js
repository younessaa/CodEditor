import express from 'express';
import mongoose from 'mongoose';

import Course from '../models/course.js';

const router = express.Router();

export const getCourses = async (req, res) => { 
    try {
        const courses = await Course.find();
                
        res.status(200).json(courses);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getCourse = async (req, res) => { 
    const { id } = req.params;

    try {
        const course = await Course.findById(id);
        
        res.status(200).json(course);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createCourse = async (req, res) => {
    const { title, participant, labs, sector, idTutor } = req.body;

    const newCourse = new Course({ title, participant, labs, sector, idTutor })

    try {
        await newCourse.save();

        res.status(201).json(newCourse );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateCourse = async (req, res) => {
    const { id } = req.params;
    const { title, participant, labs, sector, idTutor, sections} = req.body;
    
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Course with id: ${id}`);

    const updatedCourse = { title, participant, labs, sector, idTutor, sections, _id: id };

    await Course.findByIdAndUpdate(id, updatedCourse, { new: true });

    res.json(updatedCourse);
}

export const deleteCourse = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Course with id: ${id}`);

    await Course.findByIdAndRemove(id);

    res.json({ message: "Course deleted successfully." });
}


export default router;