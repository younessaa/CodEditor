import mongoose from "mongoose";

const LabSchema = mongoose.Schema({
    idCourse: { type: String, required: true },
    idTutor: { type: String, required: true },
    idStudent: { type: String, required: true },
    studentName: { type: String, required: true },
    idLab: { type: String, required: true },
    name: { type: String, required: true },
    code: { type: String, required: true },
    lang: { type: String, required: true },
    date: { type: Date, default: new Date() },
});

export default mongoose.model("Lab", LabSchema);