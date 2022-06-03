import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  sector: { type: String, required: true },
  id: { type: String },
});

export default mongoose.model("Student", studentSchema);