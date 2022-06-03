import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
  title: { type: String, required: true },
  participant: { type: Array },
  labs: [
    { 
      path: { type: String, required: true }, 
      name: { type: String, required: true },
      section: { type: Number, required: true },
    }
  ],
  sector: { type: Array, required: true },
  sections: { type: String, required: true, default: "4"},
  id: { type: String },
  idTutor: { type: String, required: true  }
});

export default mongoose.model("Course", courseSchema);