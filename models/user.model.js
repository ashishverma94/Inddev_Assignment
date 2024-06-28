 import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  company_name: { type: String },
  age: { type: Number },
  city: { type: String },
  state: { type: String },
  zip: { type: String },
  email: { type: String, required: true, unique: true },
  web: { type: String },
});

const userModel = mongoose.model("User", userSchema);
export default userModel;
